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

    async function loadData() {
        try {
            let response = await fetch("https://sos2324-17.appspot.com/api/v2/manofthematch/loadInitialData", {
                method: "GET",
            });

            let status = response.status;

            if (status === 201) {
                getApiData();
                getDataProxy();
            } 
        } catch (e) {
            console.error(e);
        }
    }

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
        // Filtrar y formatear los datos de los tiros y días festivos
        const attemptsData = data1.map(match => ({
            x: new Date(match.date).getTime(),
            y: parseInt(match.attemps)
        }));

        const holidaysData = data2.map(holiday => ({
            x: new Date(holiday.date).getTime(),
            y: 1 // Indica la presencia de un día festivo
        }));

        const options = {
            chart: {
                height: 350,
                type: 'line',
                stacked: false
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#008FFB', '#FF4560'],
            series: [
                {
                    name: 'Tiros Realizados',
                    type: 'column',
                    data: attemptsData
                },
                {
                    name: 'Días Festivos',
                    type: 'line',
                    data: holidaysData
                }
            ],
            stroke: {
                width: [0, 4]
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%'
                }
            },
            xaxis: {
                type: 'datetime',
                title: {
                    text: 'Fecha'
                }
            },
            yaxis: [
                {
                    title: {
                        text: 'Tiros Realizados'
                    }
                },
                {
                    opposite: true,
                    title: {
                        text: 'Días Festivos'
                    },
                    labels: {
                        formatter: (val) => val.toFixed(0)
                    },
                    max: 1
                }
            ],
            title: {
                text: 'Tiros Realizados y Días Festivos en Australia'
            }
        };

        const chart = new ApexCharts(document.querySelector("#chart-container"), options);
        chart.render();
    }
</script>

<div>
    <button on:click={loadData}>Cargar los datos</button>
</div>
<h1>Tiros Realizados y Días Festivos en Australia</h1>
<div id="chart-container" style="width: 100%; height: 400px;"></div>
