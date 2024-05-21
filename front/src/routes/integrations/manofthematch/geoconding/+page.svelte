<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
</svelte:head>

<script>
    import { onMount } from 'svelte';

    let dataAvailable = false;
    let cities = [];
    async function loadData() {
        try {
            let response = await fetch("https://sos2324-17.appspot.com/api/v2/manofthematch/loadInitialData", {
                method: "GET",
            });

            let status = response.status;

            if (status === 201) {
                getData();
            } 
        } catch (e) {
            console.error(e);
        }
    }  
    // Función para obtener los datos del dataset de ciudades
    async function getCitiesData() {
        const url = 'https://api.api-ninjas.com/v1/geocoding?city=Madrid';  // Actualiza esta URL según sea necesario
        const options = {
            method: "GET",
            headers: {
                "X-Api-Key": "Qr5V7x10UceVt+16gV6VWQ==Sducj1ZGameniOdv",
            },
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            cities = data;
            dataAvailable = true;
            generateChart();
        } catch (err) {
            console.log(err);
        }
    }

    function generateChart() {
        if (!dataAvailable || cities.length === 0) {
            console.error('No data available to generate chart');
            return;
        }

        const seriesData = cities.map(city => ({
            x: city.latitude,
            y: city.longitude,
            name: `${city.name}, ${city.country}${city.state ? ', ' + city.state : ''}`
        }));

        const options = {
            chart: {
                type: 'scatter',
                height: 350
            },
            series: [{
                name: 'Ciudades',
                data: seriesData
            }],
            xaxis: {
                title: {
                    text: 'Latitud'
                }
            },
            yaxis: {
                title: {
                    text: 'Longitud'
                }
            },
            tooltip: {
                custom: function({ series, seriesIndex, dataPointIndex, w }) {
                    const point = w.globals.series[seriesIndex][dataPointIndex];
                    return `<div style="padding: 10px;">${point.name}</div>`;
                }
            },
            title: {
                text: 'Ciudades llamadas Madrid y sus coordenadas'
            }
        };

        const chart = new ApexCharts(document.querySelector("#chart-container"), options);
        chart.render();
    }

    onMount(() => {
        getCitiesData();
    });
</script>
<div>
    <button on:click={loadData}>Cargar los datos</button>
</div>

<h1>Ciudades llamadas Madrid y sus coordenadas</h1>
<div id="chart-container" style="width: 100%; height: 400px;"></div>
