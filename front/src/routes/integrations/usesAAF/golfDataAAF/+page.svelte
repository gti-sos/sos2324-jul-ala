<script>
    import { onMount } from 'svelte';
    import { Container } from '@sveltestrap/sveltestrap';

    let golfData = [];
    let loading = true;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4e1a27c673msh81b6527001dad5dp145d49jsne302105ebb4f',
            'X-RapidAPI-Host': 'golf-leaderboard-data.p.rapidapi.com'
        }
    };

    onMount(async () => {
        try {
            const response = await fetch('https://golf-leaderboard-data.p.rapidapi.com/world-rankings', options);
            const data = await response.json();
            if (data.results.rankings && data.results.rankings.length > 0) {
                golfData = data.results.rankings.map((player) => ({
                    name: player.player_name,
                    points: parseInt(player.total_points)
                })).slice(0, 20);
                renderChart();
                loading = false;
            } else {
                console.error('La respuesta de la API no contiene datos válidos.');
            }
        } catch (error) {
            console.error('Error al obtener los datos de los pilotos:', error);
        }
    });

    function renderChart() {
        const chartElement = document.querySelector('#chart');
        if (!chartElement) {
            console.error('Elemento #chart no encontrado en el DOM.');
            return;
        }

        var options = {
            series: [{
                name: 'Puntos',
                data: golfData.map((player) => player.points)
            }],
            chart: {
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val;
                },
                offsetY: -20,
                style: {
                    fontSize: '14px', // Tamaño de letra aumentado
                    colors: ["#6495ED"] // Color de las etiquetas de datos
                }
            },

            xaxis: {
                categories: golfData.map((player) => player.name),
                position: 'top',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                tooltip: {
                    enabled: true,
                },
                labels: {
                    style: {
                        fontSize: '12px', // Tamaño de letra para los nombres de los jugadores
                        colors: "#444" // Color de las etiquetas de los jugadores
                    }
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function (val) {
                        return val;
                    }
                }

            },
            title: {
                text: 'Clasificación mundial de jugadores (2024)',
                floating: true,
                offsetY: 330,
                align: 'center',
                style: {
                    color: '#444',
                    fontSize: '16px', // Tamaño de letra aumentado
                    fontWeight: 'bold' // Fuente en negrita
                }
            }
        };

        var chart = new ApexCharts(chartElement, options);
        chart.render();
    }
</script>

<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <style>
        .loading {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
    </style>
</svelte:head>

<Container>
    <h1 style="color: #6495ED;">Uso Widget API Externa 2 (Golf Leaderboard Data): sin proxy</h1> 
    <h5 style="font-size: 18px;"> Clasificación mundial de jugadores de Golf (2024)</h5>
    <div id="chart"></div>

    {#if loading}
        <p class="loading" style="font-size: 16px;">Cargando datos...</p> 
    {/if}
</Container>
