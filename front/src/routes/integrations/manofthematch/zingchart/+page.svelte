<svelte:head>
    <script src="https://cdn.zingchart.com/zingchart.min.js"></script>
</svelte:head>

<script>
    import { onMount } from "svelte";

    let DATAAPI = "https://sos2324-17.appspot.com/api/v2/manofthematch";

    async function getData(url) {
        try {
            const res = await fetch(url);
            const data = await res.json();
            createChart(data);
        } catch (error) {
            console.log(`Error fetching data: ${error}`);
        }
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
        getData(DATAAPI);
    })
</script>

<div id="myChart"></div>
