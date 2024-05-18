<svelte:head>
    <script src="https://code.highcharts.com/highcharts.js"></script>
</svelte:head>

<script>
    import { onMount, afterUpdate } from 'svelte';
    import { Container } from '@sveltestrap/sveltestrap';

    let economicData = [];
    let inflationData = [];
    let combinedChartData = [];
    let chart;

    onMount(async () => {
        try {
            // Obtener datos de la API de economic Trends
            const economicResponse = await fetch('http://localhost:20000/api/v2/economicfreedom_stats');
            economicData = await economicResponse.json();

            // Obtener datos de la API de inflation
            const inflationOptions = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '4e1a27c673msh81b6527001dad5dp145d49jsne302105ebb4f',
                    'X-RapidAPI-Host': 'inflation-by-api-ninjas.p.rapidapi.com'
                }
            };

            const inflationResponse = await fetch('https://inflation-by-api-ninjas.p.rapidapi.com/v1/inflation', inflationOptions);
            inflationData = await inflationResponse.json();
            console.log('Inflation Response:', inflationData);
            console.log('Economic Trends Response:', economicData);

            // Combinar los datos de economic y inflation por país
            combinedChartData = economicData.map(economic => {
                const inflation = inflationData.find(infl => infl.country === economic.country) || {};
                return {
                    country: economic.country,
                    soundMoney: economic.soundMoney,
                    yearly_rate_pct: inflation.yearly_rate_pct || 0
                };
            });

            console.log('Combined Chart Data:', combinedChartData);

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
        if (!combinedChartData.length) {
            console.error('No data available.');
            return;
        }

        console.log('Rendering chart...');

        // Crear las etiquetas para la gráfica
        const labels = combinedChartData.map(data => data.country);
        console.log('Labels:', labels);

        // Crear un arreglo de datos para las barras
        const soundMoneyData = combinedChartData.map(data => data.soundMoney);
        const yearlyRatePctData = combinedChartData.map(data => data.yearly_rate_pct);
        console.log('Sound Money Data:', soundMoneyData);
        console.log('Yearly Rate Pct Data:', yearlyRatePctData);

        // Configurar la gráfica de Highcharts
        chart = Highcharts.chart('chart', {
            chart: {
                type: 'column',
                height: 600 // Incrementar la altura del gráfico
            },
            title: {
                text: 'Economic Sound Money and Yearly Inflation Rate by Country'
            },
            xAxis: {
                categories: labels,
                title: {
                    text: 'Country'
                }
            },
            yAxis: {
                title: {
                    text: 'Value'
                }
            },
            series: [
                {
                    name: 'Sound Money',
                    data: soundMoneyData,
                    color: '#EEC4C9' 
                },
                {
                    name: 'Yearly Inflation Rate (%)',
                    data: yearlyRatePctData,
                    color: '#FFCE00' 
                }
            ]
        });
    }

    function updateChart() {
        // Actualizar las series de datos del gráfico de Highcharts
        const soundMoneyData = combinedChartData.map(data => data.soundMoney);
        const yearlyRatePctData = combinedChartData.map(data => data.yearly_rate_pct);

        chart.series[0].setData(soundMoneyData);
        chart.series[1].setData(yearlyRatePctData);
    }
</script>

<Container>
    <h1>Integración 1: Datos EconomicFreedom y API de inflation (Highcharts)</h1>
    <div id="chart"></div>
</Container>

<style>
    #chart {
        width: 100%;
        height: 600px; /* Incrementar la altura del contenedor */
    }
</style>
