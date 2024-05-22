<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</svelte:head>

<script>
    import { onMount } from 'svelte';

    let dataAvailable = false;
    let cities = [];
    let chartInstance = null;

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

    async function getCitiesData() {
        const url = 'https://api.api-ninjas.com/v1/geocoding?city=Madrid';
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

        const ctx = document.getElementById('chart-container').getContext('2d');
        const data = {
            datasets: [{
                label: 'Ciudades llamadas Madrid',
                data: cities.map(city => ({
                    x: city.latitude,
                    y: city.longitude,
                    r: 5  // Radio del punto en el gráfico de burbujas
                })),
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        };

        const options = {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Latitud'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Longitud'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const city = cities[context.dataIndex];
                            return `${city.name}, ${city.country}${city.state ? ', ' + city.state : ''}`;
                        }
                    }
                }
            }
        };

        if (chartInstance) {
            chartInstance.destroy();
        }

        chartInstance = new Chart(ctx, {
            type: 'bubble',
            data: data,
            options: options
        });
    }

    onMount(() => {
        getCitiesData();
    });
</script>

<div>
    <button on:click={loadData}>Cargar los datos</button>
</div>

<h1>Ciudades llamadas Madrid y sus coordenadas</h1>
<canvas id="chart-container" style="width: 100%; height: 400px;"></canvas>
