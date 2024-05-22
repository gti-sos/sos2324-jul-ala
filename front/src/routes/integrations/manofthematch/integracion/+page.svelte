<svelte:head>
    <script src="https://cdn.zingchart.com/zingchart.min.js"></script>
</svelte:head>

<script>
    import { onMount } from 'svelte';

    let matchData = [];
    let covidData = [];
    let chartRendered = false;

    async function loadData() {
        try {
            let response = await fetch("https://sos2324-17.appspot.com/api/v2/manofthematch/loadInitialData", {
                method: "GET",
            });

            let status = response.status;

            if (status === 201) {
                getApiData();
                getCovidData();
            } 
        } catch (e) {
            console.error(e);
        }
    }   

    async function getApiData() {
        const url = "https://sos2324-17.appspot.com/api/v2/manofthematch?country=France"; 
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error fetching API data: ${response.statusText}`);
            }
            const data = await response.json();
            matchData = data;
            checkAndGenerateChart();
        } catch (error) {
            console.error(`Error fetching match data: ${error}`);
        }
    }

    async function getCovidData() {
        const url = 'https://api.api-ninjas.com/v1/covid19?country=France';
        const options = {
            method: "GET",
            headers: {
                "X-Api-Key": "Qr5V7x10UceVt+16gV6VWQ==Sducj1ZGameniOdv",
            },
        };
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Error fetching API data: ${response.statusText}`);
            }
            const data = await response.json();
            covidData = data;
            checkAndGenerateChart();
        } catch (err) {
            console.error(`Error fetching COVID data: ${err}`);
        }
    }

    function checkAndGenerateChart() {
        if (matchData.length > 0 && covidData.length > 0 && !chartRendered) {
            generateChart();
            chartRendered = true;
        }
    }

    function generateChart() {
        const covidCases = covidData[0].cases;
        const dates = Object.keys(covidCases);
        const totalCases = dates.map(date => covidCases[date].total);

        const matchDates = matchData.map(match => match.date);
        const goals = matchData.map(match => parseInt(match.GoalScored));

        const chartConfig = {
            type: 'mixed',
            title: {
                text: 'COVID-19 Cases and Football Match Goals in France'
            },
            scaleX: {
                labels: dates
            },
            series: [
                {
                    type: 'line',
                    text: 'COVID-19 Total Cases',
                    values: totalCases,
                    lineColor: 'red',
                    marker: {
                        backgroundColor: 'red'
                    }
                },
                {
                    type: 'bar',
                    text: 'Football Match Goals',
                    values: goals,
                    scales: 'scale-x, scale-y-2',
                    barWidth: '30px',
                    backgroundColor: 'blue'
                }
            ],
            scaleY: {
                label: {
                    text: 'COVID-19 Total Cases'
                }
            },
            scaleY2: {
                label: {
                    text: 'Football Match Goals'
                }
            }
        };

        zingchart.render({
            id: 'chart-container',
            data: chartConfig,
            height: '500px',
            width: '100%'
        });
    }

    onMount(() => {
        getApiData();
        getCovidData();
    });
</script>

<div>
    <button on:click={loadData}>Cargar datos</button>
</div>

<h1>COVID-19 Cases and Football Match Goals in France</h1>
<div id="chart-container" style="width: 100%; height: 500px;"></div>
