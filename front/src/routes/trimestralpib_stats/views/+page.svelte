<svelte:head>
    
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>

</svelte:head>

<script>

    import { onMount } from "svelte";
    let dataAvailable = false;

    let DATAAPI = "https://sos2324-17.appspot.com/api/v2/trimestralpib_stats";

    async function getData() {

        try {
            const res = await fetch(DATAAPI);
            const data = await res.json();
            console.log(`Data received: ${JSON.stringify(data, null, 2)}`);

            if (data.length > 0) {
                dataAvailable = true; 
                createFirstGraph(data);
                createSecondGraph(data);
            }

        } catch (error) {
            console.log(`Error fetching data: ${error}`);
        }
    }

    // Función asíncrona para cargar datos desde el servidor
    async function loadData() {

        try {
            let response = await fetch(DATAAPI + "/loadInitialData", {
                method: "GET",
            });

            let status = await response.status;
            console.log(`Status code: ${status}`);

            if (status === 200) {
                await getData();
            } 

        } catch (e) {
            console.error(e);
        }
    }   

    function aggregateDataBycountry(data) {

        const aggregatedData = {};

        // Sumar la prefinanciación inicial acumulada por año
        data.forEach(item => {
            if (aggregatedData[item.country]) {
                // Si el año ya está en el diccionario, sumar datos
                aggregatedData[item.country] += parseFloat(item.trimestral_pib);
            } else {
                // Si el año no está, inicializar con el primer dato encontrado
                aggregatedData[item.country] = parseFloat(item.trimestral_pib);
            }

        });

        // Convertir el objeto a un formato adecuado para Highcharts
        return Object.keys(aggregatedData).map(country => ({
            name: country,
            y: aggregatedData[country]
        }));

    }

    // Crear un gráfico de pastel utilizando Highcharts
    function createFirstGraph(data) {

    // Procesar los datos para el gráfico de pastel
    const processedData = aggregateDataBycountry(data);

    const pieChart = Highcharts.chart('pastel-container', {
        chart: {
            type: 'pie',
            height: 420, 
            width: 1580   
        },
        title: {
            text: 'Pib trimestral por año'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    formatter: function() {
                        return this.point.name;  // Mostrar solo el año en las etiquetas de datos
                    }
                }
            }
        },
        series: [{
            name: 'Pib trimestral',
            data: processedData
        }]
    });
    }

    // Crear un gráfico de dispersión utilizando Highcharts
    function createSecondGraph(data) {

        const scatterChart = Highcharts.chart('dispersion-container', {
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Relación entre "Pib trimestral" y "Pib trimestral variable" por país'
            },
            xAxis: {
            title: {
                enabled: true,
                text: 'Pib trimestral',
                style: {
                    color: '#FF6347'  
                }
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Pib trimestral variable',
                style: {
                    color: '#4682B4'  
                }
            }
        },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 70,
                floating: true,
                backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
                borderWidth: 1
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: '<span style="color:{series.color}">{point.name}</span>: <b style="color:#FF6347">{point.x}</b> Pib trimestral, <b style="color:#4682B4">{point.y}</b> Pib trimestral variable'
                    }
                }
            },
            series: [{
                name: 'Países',
                color: 'rgba(223, 83, 255, .5)',
                data: data.map(item => ({
                    name: item.country,
                    x: parseFloat(item.trimestral_pib),
                    y: parseFloat(item.trimestral_variable_pib.replace(',', '.'))
                }))
            }]
        });
    }

    onMount(() => {
        getData();
    });

</script>

<style>

    #pastel-container,
    #dispersion-container {
        width: 100%;
        height: 400px;
        margin-bottom: 20px; /* Añadí este estilo para agregar un margen inferior */
    }

    e {
        font-family: '';
        font-size: 40px;
        color: #ff864a;
        text-shadow: 2px 2px 4px rgba(254, 0, 0, 0.5);
        text-align: center;
        display: flex;
        align-items: center; 
        justify-content: center; 
    }

    /* Estilo botón de cargar datos */
    .initial {
        background-color: #ba3da7;
        color: white;
        border: none;
        padding: 2vh 3vw;
        border-radius: 5px;
        cursor: pointer;
        font-size: 30px; 
        margin-left: auto;
        margin-right: auto;
        display: block; 
        margin-top: 20px;
    }

    .initial:hover {
        background-color: #d64fb7;
    }

</style>

{#if dataAvailable==false}
    <e>No hay datos disponibles. Por favor, introduzca los datos.</e>
    <button class="initial" on:click={loadData}>Cargar datos de prueba</button>
{/if}

<div id="pastel-container"></div>
<br>
<div id="dispersion-container"></div>