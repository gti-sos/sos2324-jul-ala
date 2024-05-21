<svelte:head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
</svelte:head>

<script>
    import { onMount } from 'svelte';
    import { dev } from "$app/environment";

    let data1;
    let data2;

    onMount(async () => {
        data2 = await getData();
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(generateChart);
    });

    async function getData() {
        const url = "https://api.api-ninjas.com/v1/historicalevents?text=roman empire";
        const options = {
            method: "GET",
            headers: {
                "X-Api-Key": "BoZ7aGNrvqoVxf92RrE15Q==XD7zepsgjfNgVN5I",
            },
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            return data;
        } catch (err) {
            console.log(err);
            return [];
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

<h1>Gráfico de dispersión: Eventos históricos del Imperio Romano</h1>
<div id="scatter-chart"></div>
<p>Eventos ocurridos al Imperio Romano a lo largo de los años</p>
