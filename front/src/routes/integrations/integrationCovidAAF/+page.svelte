<svelte:head>
    <script src="https://code.highcharts.com/highcharts.js"></script>
</svelte:head>

<script>
    import { onMount, afterUpdate } from 'svelte';
    import { Container } from '@sveltestrap/sveltestrap';

    let economicData = [];
    let covidData = [];
    let combinedChartData = [];
    let chart;

    onMount(async () => {
        try {
            // Datos de mi API de Economic Freedom
            const economicResponse = await fetch('http://localhost:20000/api/v2/economicfreedom_stats');
            economicData = await economicResponse.json();

            // Filtrar los datos para excluir a Alemania y Chile
            economicData = economicData.filter(economic => economic.country !== 'Germany' && economic.country !== 'Chile');

            // Datos de la API de covid
            const covidOptions = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '4e1a27c673msh81b6527001dad5dp145d49jsne302105ebb4f',
                    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
                }
            };

            const covidResponse = await fetch('https://covid-193.p.rapidapi.com/statistics', covidOptions);
            const covidDataRaw = await covidResponse.json();

            console.log('Covid API Response:', covidDataRaw); // Imprimir la respuesta de la API de covid
            console.log('Economic API Response:', economicData);

            // Verificar y manejar la estructura de la respuesta de la API de covid
            if (covidDataRaw && covidDataRaw.response) {
                const covidCountries = covidDataRaw.response;

                console.log('Covid countries Response:', covidCountries);

                covidData = covidCountries.map(country => ({
                    country: country.country,
                    activeCases: country.cases.active / 10, // Dividir por 10 para convertir a decenas
                    source: 'Covid Data'
                }));

                // Filtrar los datos para excluir a Alemania y Chile
                covidData = covidData.filter(covid => covid.country !== 'Germany' && covid.country !== 'Chile');

                console.log('abc:', covidData);

                // Combinar los datos de economic y covid
                combinedChartData = economicData.map(economic => {
                    const covid = covidData.find(c => c.country === economic.country) || {};
                    return {
                        country: economic.country,
                        sizeOfGovernment: economic.sizeOfGovernment,
                        activeCases: covid.activeCases || 0
                    };
                });

                console.log('Combined Chart Data:', combinedChartData);
            } else {
                console.error('Error: No se encontraron datos de covid en la respuesta de la API.');
            }

            // Llamar a la función renderChart después de obtener datos de ambas API
            renderChart();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });

    afterUpdate(() => {
        if (chart) {
            // Actualizar el gráfico después de cada actualización de datos
            updateChart();
        }
    });

    function renderChart() {
        if ((!economicData || !economicData.length) || (!covidData || !covidData.length)) {
            console.error('No data available.');
            return;
        }

        // Crear las etiquetas para la gráfica
        const labels = combinedChartData.map(data => data.country);
        console.log('Labels:', labels);

        // Crear un arreglo de datos para las barras
        const economicDataSeries = combinedChartData.map(data => data.sizeOfGovernment);
        const covidDataSeries = combinedChartData.map(data => data.activeCases);
        console.log('Economic Data Series:', economicDataSeries);
        console.log('Covid Data Series:', covidDataSeries);

        // Configurar la gráfica de Highcharts
        chart = Highcharts.chart('chart', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Economic Size of Government and Active COVID-19 Cases by Country'
            },
            xAxis: {
                categories: labels,
                title: {
                    text: 'Country'
                }
            },
            yAxis: [{
                title: {
                    text: 'Size of Government'
                },
                opposite: false
            }, {
                title: {
                    text: 'Active COVID-19 Cases (in tens)'
                },
                opposite: true,
                labels: {
                    formatter: function() {
                        return this.value + '0'; // Añadir '0' a los valores del eje Y para indicar decenas
                    }
                }
            }],
            plotOptions: {
                series: {
                    pointPadding: 0.1, // Ajustar el grosor de las barras
                    groupPadding: 0.1
                }
            },
            series: [
                {
                    name: 'Size of Government',
                    data: economicDataSeries,
                    color: '#008000' // Color verde para las barras
                },
                {
                    name: 'Active COVID-19 Cases',
                    data: covidDataSeries,
                    color: '#0000FF', // Color azul para las barras
                    yAxis: 1
                }
            ]
        });
    }

    function updateChart() {
        // Actualizar las series de datos del gráfico de Highcharts
        const economicDataSeries = combinedChartData.map(data => data.sizeOfGovernment);
        const covidDataSeries = combinedChartData.map(data => data.activeCases);

        chart.series[0].setData(economicDataSeries);
        chart.series[1].setData(covidDataSeries);
    }
</script>

<Container>
    <h1>Integración 1: Datos economic-Trends y API de covid (Highcharts)</h1>
    <div id="chart"></div>
</Container>

<style>
    #chart {
        width: 100%;
        height: 800px; /* Aumentar la altura del gráfico */
    }
</style>
