<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
</svelte:head>

<script>
    import { onMount } from 'svelte';

let data1;
let data2;

onMount(async () => {
    try {
        data1 = await getApiData();
        data2 = await getDataProxy();
        generateChart();
    } catch (error) {
        console.error(error);
    }
});

async function getApiData() {
    const url = "https://sos2324-17.appspot.com/api/v2/manofthematch?country=Australia"; 
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error fetching API data: ${response.statusText}`);
    }
    return response.json();
}

async function getDataProxy() {
    const options = {
        method: "GET",
        headers: {
            "X-Api-Key": "Qr5V7x10UceVt+16gV6VWQ==Sducj1ZGameniOdv",
        },
    };
    const response = await fetch("/proxyARM", options);
    if (!response.ok) {
        throw new Error(`Error fetching proxy data: ${response.statusText}`);
    }
    return response.json();
}

    function generateChart() {
        // Filtrar y formatear los datos de los goles y días festivos
        const goalsData = data1.map(match => ({
            x: match.date,
            y: parseInt(match.GoalScored)
        }));

        const holidaysData = data2.map(holiday => ({
            x: holiday.date,
            y: 1 // Indica la presencia de un día festivo
        }));

        const options = {
            chart: {
                type: 'line',
                height: 350
            },
            series: [
                {
                    name: 'Goles Anotados',
                    data: goalsData
                },
                {
                    name: 'Días Festivos',
                    data: holidaysData
                }
            ],
            xaxis: {
                type: 'datetime',
                title: {
                    text: 'Fecha'
                }
            },
            yaxis: [{
                title: {
                    text: 'Goles Anotados'
                }
            }, {
                opposite: true,
                title: {
                    text: 'Días Festivos'
                }
            }],
            title: {
                text: 'Goles Anotados y Días Festivos en Australia'
            }
        };

        const chart = new ApexCharts(document.querySelector("#chart-container"), options);
        chart.render();
    }
</script>

<h1>Goles Anotados y Días Festivos en Australia</h1>
<div id="chart-container" style="width: 100%; height: 400px;"></div>
