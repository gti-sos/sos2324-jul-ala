<svelte:head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
</svelte:head>

<script>
    import { onMount } from 'svelte';

    let data1;
    let data2;

    onMount(async () => {
        data1 = await getApiData();
        data2 = await getDataProxy();
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(generateChart);
    });

    async function getApiData() {
        const url = "https://sos2324-17.appspot.com/api/v2/manofthematch?country=Australia"; 
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data; 
        } catch (err) {
            console.log(err);
        }
    }

    async function getDataProxy() {
        try {
            const options = {
                method: "GET",
                headers: {
                    "X-Api-Key": "Qr5V7x10UceVt+16gV6VWQ==Sducj1ZGameniOdv",
                },
            };
            const response = await fetch("/proxyARM", options);
            const data = await response.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    function generateChart() {
        const Opponent = data1.Opponent;
        const GoalScored = data1.GoalScored;
        const dia = data2.day;

        var data = google.visualization.arrayToDataTable([
            ['Categoria', 'Valor'],
            ['Oponente', Opponent],
            ['Goles', GoalScored],
            ['Dia de las vacaciones', dia]
        ]);

        var options = {
            title: 'Oponent, Goles, y dia',
            hAxis: {
                title: 'Value'
            },
            vAxis: {
                title: 'Category'
            }
        };

        var chart = new google.visualization.BarChart(document.getElementById('chart-container'));
        chart.draw(data, options);
    }
</script>

<h1>Oponente, Goles, y dia de vacaciones en Australia</h1>
<div id="chart-container" style="width: 100%; height: 400px;"></div>