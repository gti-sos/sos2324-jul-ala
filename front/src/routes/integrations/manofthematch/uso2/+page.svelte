<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
</svelte:head>

<script>
    import { onMount } from 'svelte';

    let eventsData = [];
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
    // Función para obtener datos de eventos históricos
    async function getEventsData() {
        const url = 'https://api.api-ninjas.com/v1/historicalevents?text=Spain';
        const options = {
            method: "GET",
            headers: {
                "X-Api-Key": "Qr5V7x10UceVt+16gV6VWQ==Sducj1ZGameniOdv",
            },
        };
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Error fetching events data: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (err) {
            console.error(err);
            return [];
        }
    }

    // Función para generar la gráfica
    function generateChart() {
        const processedData = eventsData.map(event => ({
            x: `${event.year}-${event.month.padStart(2, '0')}-${event.day.padStart(2, '0')}`,
            y: 1 // Representa un evento en un día específico
        }));

        const options = {
            chart: {
                type: 'bar',
                height: 350
            },
            series: [{
                name: 'Eventos Históricos',
                data: processedData
            }],
            xaxis: {
                type: 'datetime',
                title: {
                    text: 'Fecha'
                }
            },
            yaxis: {
                title: {
                    text: 'Número de Eventos'
                }
            },
            tooltip: {
                custom: function({ series, seriesIndex, dataPointIndex, w }) {
                    const eventInfo = eventsData[dataPointIndex].event;
                    return `<div style="padding: 10px;">${eventInfo}</div>`;
                }
            },
            title: {
                text: 'Eventos Históricos en España'
            }
        };

        const chart = new ApexCharts(document.querySelector("#chart-container"), options);
        chart.render();
    }

    // Cargar datos y generar la gráfica al montar el componente
    onMount(async () => {
        eventsData = await getEventsData();
        generateChart();
    });
</script>
<div>
    <button on:click={loadData}>Cargar los datos</button>
</div>

<h1>Eventos Históricos en España</h1>
<div id="chart-container" style="width: 100%; height: 400px;"></div>
