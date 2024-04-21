<svelte:head>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
	<script src="https://code.highcharts.com/modules/export-data.js"></script>
	<script src="https://code.highcharts.com/modules/accessibility.js"></script>
    <script src="https://code.highcharts.com/modules/funnel.js"></script>
</svelte:head>

<script>
    import { onMount } from "svelte";
    let dataAvailable = false;

    let DATAAPI = "http://sos2324-17.appspot.com/api/v2/economicfreedom_stats";

    async function getData() {

        try {
            const res = await fetch(DATAAPI);
            const data = await res.json();
            console.log(`Data received: ${JSON.stringify(data, null, 2)}`);

            if (data.length > 0) {
                dataAvailable = true; 
                createGraph1(data);
                createGraph2(data);
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

    function createGraph1(data) {
        const processedData = processData(data);

        // Crear el gráfico de columnas apiladas
        const chart = Highcharts.chart('container1', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Distribución de paises por tamaño de gobierno'
            },
            xAxis: {
                categories: processedData.sizeOfGovernmentRanges,
                tickInterval: 1,
                title: {
                    text: 'Rango de Tamaño de gobierno'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Cantidad de Paises'
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: processedData.series
        });
    }

    function processData(data) {
        // Definir los rangos de sizeOfGovernment
        const sizeOfGovernmentRanges = ['5-6', '6-7', '7-8', '8-9', '9-10'];

        // Inicializar contadores por país y rango de sizeOfGovernment
        const countsByCountryAndsizeOfGovernmentRange = {};

        data.forEach(pais => {
            const country = pais.country;
            const sizeOfGovernment = pais.sizeOfGovernment;
            const sizeOfGovernmentRange = getsizeOfGovernmentRange(sizeOfGovernment);
            if (!countsByCountryAndsizeOfGovernmentRange[country]) {
                countsByCountryAndsizeOfGovernmentRange[country] = {};
            }
            if (!countsByCountryAndsizeOfGovernmentRange[country][sizeOfGovernmentRange]) {
                countsByCountryAndsizeOfGovernmentRange[country][sizeOfGovernmentRange] = 0;
            }
            countsByCountryAndsizeOfGovernmentRange[country][sizeOfGovernmentRange]++;
        });

        // Procesar los datos en el formato esperado por Highcharts
        const series = Object.keys(countsByCountryAndsizeOfGovernmentRange).map(country => ({
            name: country,
            data: sizeOfGovernmentRanges.map(range => countsByCountryAndsizeOfGovernmentRange[country][range] || 0)
        }));

        return {
            sizeOfGovernmentRanges,
            series
        };
    }

    function getsizeOfGovernmentRange(sizeOfGovernment) {
        if (sizeOfGovernment <= 5) {
            return '0-5';
        } else if (sizeOfGovernment <= 6) {
            return '5-6';
        } else if (sizeOfGovernment <= 7) {
            return '6-7';
        } else if (sizeOfGovernment <= 8) {
            return '7-8';
        } else if (sizeOfGovernment <= 9) {
            return '8-9';
        }  else {
            return '9-10';
        }
    }

    function createGraph2(data) {
        // Ordenar los datos por 'daily_steps' de menor a mayor
        data.sort((a, b) => a.regulation - b.regulation);

        // Crear el gráfico de tipo 'pyramid'
        Highcharts.chart('container2', {
            chart: {
                type: 'pyramid'
            },
            title: {
                text: 'Ranking de países con mejor regulacion',
                x: -50
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b> ({point.y:.2f})',
                        softConnector: true
                    },
                    center: ['40%', '50%'],
                    width: '80%'
                }
            },
            legend: {
                enabled: false
            },
            series: [{
                name: 'Unique users',
                data: data.map(record => [record.country, record.regulation])
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        plotOptions: {
                            series: {
                                dataLabels: {
                                    inside: true
                                },
                                center: ['50%', '50%'],
                                width: '100%'
                            }
                        }
                    }
                }]
            }
        });
    }



    onMount(() => {
        getData();
    })

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

<div id="container1" style="width: 100%; height: 400px;"></div>
<div id="container2" style="width: 100%; height: 400px;"></div>
