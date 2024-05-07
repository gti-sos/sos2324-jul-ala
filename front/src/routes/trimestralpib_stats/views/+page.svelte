<svelte:head>
    
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>

    <script src="https://fastly.jsdelivr.net/npm/echarts@5.5.0/dist/echarts.min.js"></script>

</svelte:head>

<script>

    import { onMount } from "svelte";
    let dataAvailable = false;

    //Importamos biblioteca gráfica ECHARTS
    import * as echarts from 'echarts';
    //import worldJSON from '../views/world.json';

    let DATAAPI = "https://sos2324-17.appspot.com/api/v2/trimestralpib_stats";

    let myChart;
    var app = {};
    var option;

    async function getData() {

        try {
            const res = await fetch(DATAAPI);
            const data = await res.json();
            console.log(`Data received: ${JSON.stringify(data, null, 2)}`);

            if (data.length > 0) {
                dataAvailable = true; 
                createFirstGraph(data);
                createSecondGraph(data);
                getGraph3(data);

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

    async function getGraph3(data) {
        // Filtramos los datos de España entre 2011 y 2014
        const dataSpaFiltered = data.filter(
            (item) =>
                item.country === "Spain" &&
                item.year>=2018,
                
        );

        const dataFraFiltered = data.filter(
            (item) =>
                item.country === "France" &&
                item.year>=2018,
                
        );
        // Función para obtener el valor numérico del PIB trimestral o devolver 0 si no está definido o no es un número
        const getNumericValue = (item) => {
                const pibNumerico = parseFloat(item.trimestral_pib.replace(' M€', ''));
                return isNaN(pibNumerico) ? 0 : pibNumerico;
            };
        
        // Filtramos los datos de Kiribati entre 2011 y 2014
        const dataKirFiltered = data.filter(
            (item) =>
                item.country === "Germany" &&
                item.year>=2018,
        );
        // Obtenemos los valores de wri para España
        const datosSpain = dataSpaFiltered.map((item) => ({
            year: item.year,
            value: getNumericValue(item) || 0,
        }));


        const datosFrance = dataFraFiltered.map((item) => ({
            year: item.year,
            value: getNumericValue(item) || 0,
        }));
        // Obtenemos los valores de wri para Kiribati
        const datosKiribati = dataKirFiltered.map((item) => ({
            year: item.year,
            value: getNumericValue(item) || 0,
        }));
        // Configuración de la gráfica
        const option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
            },
            legend: {
                data: ["Spain", "Germany", "France"],
            },
            toolbox: {
                show: true,
                orient: "vertical",
                left: "right",
                top: "center",
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ["line", "bar", "stack"] },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            xAxis: [
                {
                    type: "category",
                    axisTick: { show: false },
                    data: datosSpain.map((item) => item.year),
                },
            ],
            yAxis: [
                {
                    type: "value",
                },
            ],
            series: [
                {
                    name: "Spain",
                    type: "bar",
                    barGap: 0,
                    data: datosSpain.map((item) => item.value),
                },
                {
                    name: "Germany",
                    type: "bar",
                    data: datosKiribati.map((item) => item.value),
                },
                {
                    name: "France",
                    type: "bar",
                    data: datosFrance.map((item) => item.value),
                },
            ],
        };
        // Si la opción es un objeto, asignamos la configuración a la gráfica
        if (option && typeof option === "object") {
            myChart.setOption(option);
        }
        // Hacemos que la gráfica se redimensione cuando se cambia el tamaño de la ventana
        window.addEventListener("resize", myChart.resize);
    }

    onMount(() => {
        getData();
        
        var dom = document.getElementById("chart-container");
        myChart = echarts.init(dom, null, {
            renderer: "canvas",
            useDirtyRect: false,
        });
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

    #tituloCent {
        background-color: white;
        text-align: center;
    }
    * {
        margin: 0;
        padding: 0;
    }
    #chart-container {
        position: relative;
        height: 400px;
        width: 800px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        background-color: white;
    }


</style>

{#if dataAvailable==false}
    <e>No hay datos disponibles. Por favor, introduzca los datos.</e>
    <button class="initial" on:click={loadData}>Cargar datos de prueba</button>
{/if}

<div id="pastel-container"></div>
<br>
<div id="dispersion-container"></div>
<br>
<h3 id="tituloCent">
    Comparación del PIB entre España, Alemania y Francia
</h3>
<br>
<div id="chart-container"></div>