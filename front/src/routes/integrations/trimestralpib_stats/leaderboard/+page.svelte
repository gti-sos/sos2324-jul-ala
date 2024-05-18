<script>
    import { onMount } from 'svelte';
    import { dev } from "$app/environment";
  
    let API = "/api/v2/trimestralpib_stats";
  
    if (dev) {
        API = "http://localhost:20000" + API;
    }
  
    let data1 = {};
    let tpData = [];
    let dataAvailable = false;
  
    onMount(async () => {
        data1 = await getData1();
        tpData = await getData();
        console.log("Inflation Data:", data1);
        console.log("PIB Data:", tpData);
        if (tpData && data1) {
            renderChart(tpData, data1);
        }
    });
  
    async function getData1() {
        const url = "https://api.api-ninjas.com/v1/inflation?country=Germany";
        const options = {
            method: "GET",
            headers: {
                "X-Api-Key": "jUqtrw2mBzTqyjJiGfcjDQ==9ciFA7bsDbmRiYnB",
            },
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log("Fetched Inflation Data:", data);
            return data[0]; 
        } catch (err) {
            console.log(err);
            return null;
        }
    }
  
  
    async function getData() {
        const url = API; 
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log("Fetched PIB Data:", data);
            return data;
        } catch (err) {
            console.log(err);
            return [];
        }
    }
  
    function combineData(tpData, inflationData) {
        if (!inflationData || tpData.length === 0) {
            console.log("Error: No data available");
            return { monthly: [], annual: [] };
        }
  
        const germanyPibData = tpData.filter(item => item.country === "Germany");
        console.log("Filtered Germany PIB Data:", germanyPibData);
  
        const combinedData = germanyPibData.map(item => ({
            x: parseFloat(item.trimestral_pib.replace(/[^\d.-]/g, '')),
            y: inflationData.monthly_rate_pct
        }));
  
        const combinedAnnualData = germanyPibData.map(item => ({
            x: parseFloat(item.annual_variable_pib.replace(/[^\d.-]/g, '')),
            y: inflationData.yearly_rate_pct
        }));
  
        console.log("Combined Monthly Data:", combinedData);
        console.log("Combined Annual Data:", combinedAnnualData);
  
        return {
            monthly: combinedData,
            annual: combinedAnnualData
        };
    }
  
    async function renderChart(tpData, data1) {
        const combinedData = combineData(tpData, data1);
  
        const options = {
            series: [
                {
                    name: 'Inflacion mensual(%) vs Pib trimestral(M€)',
                    data: combinedData.monthly
                },
                {
                    name: 'Inflacion anual(%) vs Pib variable anual (%)',
                    data: combinedData.annual
                }
            ],
            chart: {
                height: 350,
                type: 'scatter',
            },
            xaxis: {
                title: {
                    text: 'Datos PIB'
                }
            },
            yaxis: {
                title: {
                    text: 'Rango Inflacion(%)'
                }
            },
            title: {
                text: 'Scatter Plot: Inflacion vs PIB',
                align: 'center'
            }
        };
  
        
        console.log("Chart Options:", options);
  
        const chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
    }
  </script>
  
  <svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
  </svelte:head>
  
  <h1>Inflation vs PIB in Germany</h1>
  <div id="chart"></div>
  <p>Datos combinados de inflación y PIB para Alemania.</p>
  
  