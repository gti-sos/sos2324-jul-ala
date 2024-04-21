<svelte:head>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
</svelte:head>

<script>
    import {onMount} from "svelte";
    import { dev } from '$app/environment';
    import { Button, Icon, FormGroup, Label, Input, Modal, ModalBody, ModalFooter, ModalHeader, 
            Alert, Card, CardBody, CardHeader, CardText, CardTitle,  Row, Col, 
            Container, ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle} from '@sveltestrap/sveltestrap';
    
    // VARIABLE RUTA API
    
    let API_ALA = '/api/v2/trimestralpib_stats';
    let API_ARM = '/api/v2/manofthematch';
    let API_AAF = '/api/v2/economicfreedom_stats';
    if(dev){
        API_ALA = 'http://localhost:20000'+API_ALA;
        API_ARM = 'http://localhost:20000'+API_ARM;
        API_AAF = 'http://localhost:20000'+API_AAF;
    }
    // ALERTA INFO

    let info = "";
    let v_info = false;
    function f_info() {
        (setTimeout(function(){v_info = false;}, 6000));
    }

    // INICIALIZAR GRÁFICAS

    onMount(async () => {
        await processCountryData();
        createChart();
    });


    // DATOS

    let countryData = [];

    // Function to fetch data from a URL
    async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return []; // Return empty array in case of an error
    }
    }

    function getRegion(country) {
    const regions = {
        "Asia": ["Japan", "China", "Saudi Arabia", "Corea Republic", "Hong Kong Sar, China", "Singapur", "Taiwan", "Lithuania"],
        "Europe": ["Spain", "Germany", "United Kingdom", "France", "Italy", "Portugal", "Euro Zone", "Belgium", "Bulgary", "Swiss", "Cyprus", "Czechia", "Denmark", "Estonia", "Finland", "Greece", "Croatia", "Hungary", "Serbia", "Switzerland", "Sweden", "Ireland", "Luxembourg", "Malta", "Georgia", "Latvia"],
        "Africa": ["Egypt", "Morocco", "Iran", "Nigeria", "Mauritius"],
        "North America": ["United States", "Canada"],
        "South America": ["Argentina", "Brasil", "Chile", "Colombia", "Costa Rica", "Uruguay", "Peru", "Mexico", "Brazil", "Panama"],
        "Oceania": ["Australia", "Iceland", "New Zealand"]
    };

     // Iterar sobre las regiones y verificar si el país está en alguna de ellas
     for (const region in regions) {
        if (regions[region].includes(country)) {
            return region;
        }
    }

    // Si no se encuentra ninguna coincidencia, devolver "Unknown"
    return "Unknown";
    }

    
    // Function to process country data
    async function processCountryData() {
        const trimestralpibData = await fetchData(API_ALA);
        const econmicfreedomData = await fetchData(API_AAF);
        const matchsData = await fetchData(API_ARM);

         // Process Airbnb data
         trimestralpibData.forEach(entry => {
            const region = getRegion(entry.country);
            const existingEntry = countryData.find(country => country.region === region);
            if (existingEntry) {
                existingEntry.averageTrimestralPib += parseFloat(entry.trimestral_pib);
                existingEntry.countTrimestralPib++;
            } else {
                countryData.push({
                    region: region,
                    averageTrimestralPib: parseFloat(entry.trimestral_pib),
                    averageEconomicFreedom: 0,
                    averageMatchs: 0,
                    countTrimestralPib: 1,
                    countEconomicFreedom: 0,
                    countMatchs: 0
                });
            }
        });

        // Process food data (calculating average food price for each region)
        econmicfreedomData.forEach(entry => {
            const region = getRegion(entry.country);
            const existingEntry = countryData.find(country => country.region === region);

            if (existingEntry) {
            //existingEntry.averageEconomicFreedom += calculateAverageFoodPrice(foodData, region);
            existingEntry.averageEconomicFreedom += parseFloat(entry.overallScore);
            existingEntry.countEconomicFreedom++;
            } else {
            countryData.push({
                region: region,
                averageTrimestralPib: 0,
                //averagePriceFood: calculateAverageFoodPrice(foodData, region),
                averageEconomicFreedom: parseFloat(entry.overallScore),
                averageMatchs: 0,
                countTrimestralPib: 0,
                countEconomicFreedom: 1,
                countMatchs: 0
            });
            }
        });

        // Process water data
        matchsData.forEach(entry => {
        const region = getRegion(entry.country);
        const existingEntry = countryData.find(country => country.region === region);

        if (existingEntry) {
            /*const waterConsumptionValue = entry.total_improved_total === "-" ? 0 : parseFloat(entry.total_improved_total); // Convert non-numeric values to 0
            if (waterConsumptionValue) { // Check if the value is non-zero after conversion
            existingEntry.totalImprovedWaterConsumption += waterConsumptionValue;
            }*/
            existingEntry.averageMatchs += entry.GoalScored;
            existingEntry.countMatchs++;
        } else {
            countryData.push({
                region: region,
                averageTrimestralPib: 0,
                averageEconomicFreedom: 0,
                //totalImprovedWaterConsumption: entry.total_improved_total === "-" ? 0 : parseFloat(entry.total_improved_total), // Convert non-numeric values to 0
                averageMatchs: entry.GoalScored,
                countAirbnbListings: 0,
                countFood: 0,
                countWater: 1
            });
        }
        });

         // Calculate averages (after updating all entries)
        countryData.forEach(entry => {
            entry.averageTrimestralPib = entry.countTrimestralPib > 0 ? (entry.averageTrimestralPib / entry.countTrimestralPib).toFixed(2) : 0;
            entry.averageEconomicFreedom = entry.countEconomicFreedom > 0 ? (entry.averageEconomicFreedom / entry.countEconomicFreedom).toFixed(2) : 0;
            entry.averageMatchs = entry.countMatchs > 0 ? (entry.averageMatchs / entry.countMatchs).toFixed(2) : 0;
        });

        }

        async function createChart() {
            // Verificar que countryData esté definido
            if (!countryData) {
                console.log("No hay datos disponibles para crear la gráfica.");
                return;
            }

            console.log("Datos de país antes de dibujar la gráfica:", countryData);

            // Verificar la suma de los precios de la comida por región
            countryData.forEach(country => {
                console.log(`Suma de precios de overallScored para ${country.region}: ${country.averageEconomicFreedom}`);
            });

            Highcharts.chart('chart-container', {
                chart: {
                    type: 'column' // Usar 'column' para columnas agrupadas
                },
                title: {
                    text: 'Comparativa de costo de vida por región',
                    align: 'center'
                },
                xAxis: {
                    categories: countryData.map(country => country.region)
                },
                yAxis: {
                    min: 0, // Establecer el valor mínimo para el eje y
                    title: {
                        text: 'Costo promedio'
                    },
                    stackLabels: { // Habilitar etiquetas de apilamiento para totales
                        enabled: true
                    }
                },
                tooltip: {
                    headerFormat: '<b>{point.x}</b><br/>',
                    pointFormat: '{series.name}: {point.y} €'
                },
                plotOptions: {
                    column: {
                        grouping: true, // Habilitar columnas agrupadas
                        dataLabels: { // Habilitar etiquetas de datos para valores dentro de las columnas
                            enabled: true
                        }
                    }
                },
                series: [{
                    name: 'Pib Trimestral',
                    color: '#f00', // Color rojo
                    data: countryData.map(country => parseFloat(country.averageTrimestralPib))
                }, {
                    name: 'overAllScored',
                    color: '#0f0', // Color verde
                    data: countryData.map(country => parseFloat(country.averageEconomicFreedom))
                }, {
                    name: 'Matchs',
                    color: '#00f', // Color azul
                    //data: countryData.map(country => parseFloat(country.totalImprovedWaterConsumption))
                    data: countryData.map(country => parseFloat(country.averageMatchs))
                }]
            });
        }


        // Function to calculate average food price (considering all food items)
        /*function calculateAverageFoodPrice(foodData, region) {
        let totalFoodPrice = 0;
        let countFoodItems = 0;

        foodData.forEach(entry => {
            const country = entry.adm0_name;
            const regionMatch = getRegion(country) === region;
            if (regionMatch && entry.cm_name == "Bread") {
            totalFoodPrice += entry.mp_price;
            countFoodItems++;
            }
        });

        return countFoodItems > 0 ? totalFoodPrice / countFoodItems : 0;
        }*/


        async function getInitialData(){
            let response = await fetch(API_ALA + "/loadInitialData", {
                        method: "GET"
                    });
            const status = await response.status;
            let response2 = await fetch(API_ARM + "/loadInitialData", {
                        method: "GET"
                    });
            const status2 = await response.status;
            let response3 = await fetch(API_AAF + "/loadInitialData", {
                        method: "GET"
                    });
            const status3 = await response.status;
            if (status == 201 && status2 == 201 && status3 == 201){
                window.location.reload();
            } else {
                info = "Los datos ya están cargados";
                v_info = true;
                f_info();
                console.log("Error al cargar datos");
            };
        };

</script>
<main>
    <Container class="content-container" style="justify-content: center;"> 
        <Container>
            <Row>
                <Col><h1> Gráfica común</h1></Col>
            </Row>
        </Container>
        <Container class="text-center">
            <Row>
                <Col cols={{ xs:4 }}>
                    <Button color="warning" on:click="{getInitialData}">Cargar datos</Button>
                </Col>                       
            </Row>
        </Container>
        <br/>

        <Container>
                <Row><Col><Alert color="info" isOpen={v_info} toggle={() => (v_info = false)}>{info}</Alert></Col></Row>
                <br/>
            <Row><Col><div id="chart-container" style="width:100%; height:400px;"></div></Col></Row>
            </Container>
        </Container>
</main>