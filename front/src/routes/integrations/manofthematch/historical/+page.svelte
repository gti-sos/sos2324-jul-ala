<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
</svelte:head>

<script>
    import { onMount } from 'svelte';
    import ApexCharts from 'apexcharts';

    let data1 = [];
    let data2 = [];

    onMount(async () => {
        try {
            data1 = await getApiData();
            data2 = await getData();
            if (data1.length > 0 && data2.length > 0) {
                generateChart();
            } else {
                console.error('No data available to generate the chart');
            }
        } catch (error) {
            console.error('Error loading data:', error);
        }
    });

    async function fetchWithRetry(url, options = {}, retries = 3, backoff = 300) {
        for (let i = 0; i < retries; i++) {
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.statusText}`);
                }
                return await response.json();
            } catch (error) {
                console.error(`Attempt ${i + 1} failed: ${error.message}`);
                if (i < retries - 1) {
                    await new Promise(res => setTimeout(res, backoff * Math.pow(2, i)));
                } else {
                    throw error;
                }
            }
        }
    }

    async function getApiData() {
        const url = "https://sos2324-17.appspot.com/api/v2/manofthematch?country=Spain"; 
        return fetchWithRetry(url);
    }

    async function getData() {
        const url = "https://api.api-ninjas.com/v1/historicalevents?text=Spain";
        const options = {
            method: "GET",
            headers: {
                "X-Api-Key": "Qr5V7x10UceVt+16gV6VWQ==Sducj1ZGameniOdv",
            },
        };
        return fetchWithRetry(url, options);
    }

    function generateChart() {
        const goalsData = data1.map(match => ({
            x: match.date,
            y: parseInt(match.GoalScored),
            event: `Goles Anotados: ${match.GoalScored}`
        }));

        const eventsData = data2.map(event => ({
            x: `${event.year}-${event.month.padStart(2, '0')}-${event.day.padStart(2, '0')}`,
            y: 0, // Esto se trazará en el eje secundario
            event: event.event
        }));

        const chartData = [
            {
                name: 'Goles Anotados',
                data: goalsData
            },
            {
                name: 'Eventos Históricos',
                data: eventsData
            }
        ];

        const options = {
            chart: {
                type: 'line',
                height: 350
            },
            series: chartData,
            xaxis: {
                type: 'datetime',
                title: {
                    text: 'Fecha'
                }
            },
            yaxis: [
                {
                    title: {
                        text: 'Goles Anotados'
                    }
                },
                {
                    opposite: true,
                    title: {
                        text: 'Eventos Históricos'
                    }
                }
            ],
            tooltip: {
                shared: true,
                custom: function({series, seriesIndex, dataPointIndex, w}) {
                    const point = w.globals.series[seriesIndex][dataPointIndex];
                    const eventInfo = point.event;
                    return `<div style="padding: 10px;">${eventInfo}</div>`;
                }
            },
            title: {
                text: 'Goles Anotados y Eventos Históricos Relacionados'
            }
        };

        const chart = new ApexCharts(document.querySelector("#chart-container"), options);
        chart.render();
    }
</script>

<h1>Goles Anotados y Eventos Históricos Relacionados</h1>
<div id="chart-container" style="width: 100%; height: 400px;"></div>
