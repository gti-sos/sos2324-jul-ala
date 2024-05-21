<svelte:head>
    <script src="https://cdn.zingchart.com/zingchart.min.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/data.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</svelte:head>

<script>
    import { onMount } from "svelte";

    let dataAvailable = false;
    let API = "https://sos2324-17.appspot.com/api/v2/manofthematch";

    async function getData() {
        try {
            const response = await fetch(API + "?limit=100&offset=0", { method: "GET" });
            const data = await response.json(); 

            if (data.length > 0) {
                dataAvailable = true; 
                createGraph1(data);
                createGraph2(data);
                drawDonutChart(data);
                createChart(data);  // Verificar que esta función está al final y se llama correctamente
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

            let status = response.status;

            if (status === 201) {
                getData();
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

        Highcharts.chart('pie-chart-container', {
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

        Highcharts.chart('bar-chart-container', {
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
                categories: processedData.map(item => item.name),
                title: {
                    text: 'Oponente'
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

    let donutChart = null; 

    function drawDonutChart(data) {
        const countries = [...new Set(data.map(item => item.country))];
        const golesData = countries.map(country => {
            const countryData = data.filter(item => item.country === country);
            const totalgoles = countryData.reduce((acc, cur) => acc + parseFloat(cur.GoalScored), 0);
            const averageDepression = totalgoles / countryData.length; 
            return averageDepression;
        });

        const ctx = document.getElementById('donut-chart').getContext('2d');

        if (donutChart) {
            donutChart.destroy();
        }

        donutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: countries.map(String),
                datasets: [{
                    data: golesData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'top', 
                    align: 'center', 
                    labels: {
                        boxWidth: 20, 
                        padding: 20 
                    }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    }

    function createChart(data) {
        const Ranges = [
            { label: '0', count: 0 },
            { label: '1', count: 0 },
            { label: '2', count: 0 },
            { label: '3 o más', count: 0 }
        ];

        // Contamos partidos con su numero de goles
        data.forEach(e => {
            if (e.GoalScored == "0") Ranges[0].count++;
            else if (e.GoalScored == "1") Ranges[1].count++;
            else if (e.GoalScored == "2") Ranges[2].count++;
            else Ranges[3].count++;
        });

        const chartConfig = {
            type: 'hbar',
            title: {
                text: 'Numero de partidos con un numero de goles',
                backgroundColor: 'none',
                fontColor: '#A4A4A4',
                fontFamily: 'Arial',
                fontSize: '18px'
            },
            plot: {
                animation: {
                    delay: 300,
                    effect: 'ANIMATION_EXPAND_TOP',
                    method: 'ANIMATION_LINEAR',
                    sequence: 'ANIMATION_BY_PLOT_AND_NODE',
                    speed: '500'
                },
                barsOverlap: '100%',
                borderRadius: '8px',
                hoverState: {
                    visible: false
                }
            },
            plotarea: {
                margin: '60px 20px 20px 140px'
            },
            scaleX: {
                labels: ['0 goles', '1 gol', '2 goles', '3 o más goles'],
                item: {
                    autoAlign: true,
                    fontSize: '14px',
                    lineColor: 'none',
                    paddingRight: '20px'
                },
                tick: {
                    visible: false
                }
            },
            scaleY: {
                visible: false
            },
            series: [
                {
                    values: Ranges.map(r => r.count),
                    backgroundColor: ['#FF9999', '#FFCC66', '#66CCCC', '#99CC99'],
                    barWidth: '40px',
                    borderColor: '#e8e3e3',
                    fillAngle: 90
                }
            ]
        };

        zingchart.render({
            id: 'myChart',
            data: chartConfig,
            height: '500px',
            width: '100%'
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
<canvas id="donut-chart" width="400" height="400"></canvas>
<div id="myChart"></div>
