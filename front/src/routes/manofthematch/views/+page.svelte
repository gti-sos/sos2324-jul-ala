<svelte:head>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/data.js"></script>
</svelte:head>

<script>
    import { onMount } from "svelte";

    let dataAvailable = false;

    let API = "https://sos2324-17.appspot.com/api/v2/manofthematch";

    async function getData() {
    try {
        const response = await fetch(API+"?limit=100&offset=0", { method: "GET" });
        const data = await response.json(); 

        if (data.length > 0) {
            dataAvailable = true; 
            createGraph1(data);
            createGraph2(data);
        }
    } catch (error) {
        console.log(`Error fetching data: ${error}`);
    }
}


    async function loadData() {
        try {
            let response = await fetch(API + "/loadInitialData", {
                method: "GET",
            });

            let status = await response.status;

            if (status === 201) {
            getData();
            
            createGraph1(data);
            createGraph2(data);
        } 
        } catch (e) {
            console.error(e);
        }
    }   

    function aggregateDataByCountry(data) {
        const aggregatedData = {};

        data.forEach(item => {
            if (aggregatedData[item.country]) {
                aggregatedData[item.country] += parseInt(item.GoalScored);
            } else {
                aggregatedData[item.country] = parseInt(item.GoalScored);
            }
        });

        return Object.keys(aggregatedData).map(country => ({
            name: country,
            y: aggregatedData[country]
        }));
    }

    function findHighestSalarySectors(data) {
    const sectors = [...new Set(data.map(item => item.Opponent))];
    const processedData = [];

    sectors.forEach(sector => {
        const maxSalary = Math.max(...data.filter(item => item.Opponent === sector).map(item => parseInt(item.attemps)));
        processedData.push({
            name: sector,
            y: maxSalary
        });
    });

    return processedData;
}


    function createGraph1(data) {
        const processedData = aggregateDataByCountry(data);

        const splineChart = Highcharts.chart('pie-chart-container', {
            chart: {
                type: 'spline',
                height: 420, 
                width: 1580   
            },
            title: {
                text: 'Goles por oponente'
            },
            xAxis: {
                type: 'category',
                title: {
                    text: 'Oponente'
                }
            },
            yAxis: {
                title: {
                    text: 'Goles'
                }
            },
            series: [{
                name: 'Goles',
                data: processedData
            }]
        });
    }


    function createGraph2(data) {
    const processedData = findHighestSalarySectors(data);

    const colors = Highcharts.getOptions().colors;

    const barChart = Highcharts.chart('bar-chart-container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Oponente y sus tiros'
        },
        yAxis: {
            title: {
                text: 'Número de tiros'
            }
        },
        xAxis: {
            categories: processedData.map(item => item.name), // Aquí asignamos los nombres de los oponentes al eje Y
            title: {
                text: 'Oponente' // Cambiamos el título del eje Y
            }
        },
        series: [{
            name: 'Número de tiros',
            data: processedData.map((item, index) => ({
                y: item.y,
                color: colors[index % colors.length]
            }))
        }],
        legend: {
            enabled: false
        }
    });
}




    onMount(() => {
        getData();
    });

</script>

<div>
    <button on:click={loadData}>Cargar los datos</button>
</div>

<div id="pie-chart-container"></div>
<div id="bar-chart-container"></div>