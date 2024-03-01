let cool = require("cool-ascii-faces");
let express = require("express");
let bodyParser = require("body-parser");
let API_ALA = require("./api/api-ALA")

const adrian_data = require('./index-ALA.js')
const antonio_data = require('./index-ARM.js')
const ahmed_data = require('./index-AAF.js')

let app = express();
app.use(bodyParser.json());

const PORT = (process.env.PORT || 20000);

//api
API_ALA(app);

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
});

//static

app.use("/", express.static("./public"));

//cool

app.get("/cool", (req, res)=>{
    res.send(`<html><body><h1>${cool()}</h1></body></html>`);
});

//samples

app.get("/samples/ALA", (req, res)=>{
    const resultado = calcularMedia(adrian_data, "country", "España", "trimestral_pib")
    res.send(`<html><body><h1>${resultado}</h1></body></html>`);


});

app.get("/samples/ARM", (req, res)=>{
    const resultado = calcularMediaAttemptsSpain(antonio_data, "Spain")
    res.send(`<html><body><h1>${resultado}</h1></body></html>`);


});

app.get("/samples/AAF", (req, res)=>{
    const resultado = calcularMediaAttemptsSpain(ahmed_data)
    res.send(`<html><body><h1>${resultado}</h1></body></html>`);


});




//Adrian
function calcularMedia(adrian_data, campoGeografico, valorGeografico, campoNumerico) {
    // Filtrar los datos para obtener solo los que coinciden con el valor geográfico proporcionado
    const datosFiltrados = adrian_data.filter(item => item.country === valorGeografico);

    // Verificar si se encontraron datos para el valor geográfico proporcionado
    if (datosFiltrados.length === 0) {
        return `No se encontraron datos para ${valorGeografico}.`;
    }

    // Extraer los valores numéricos del campo especificado
    const valoresNumericos = datosFiltrados.map(item => parseFloat(item[campoNumerico].replace("M€", "").replace(",", ".")));

    // Calcular la media de los valores numéricos
    const suma = valoresNumericos.reduce((total, valor) => total + valor, 0);
    const media = suma / valoresNumericos.length;

    return media;
}

//antonio
function calcularMediaAttemptsSpain(antonio_data, pais) {
    // Filtrar los datos para obtener solo las líneas en las que el pais aparece como equipo o como oponente
    const datosPais = antonio_data.filter(l => l.Team === pais || l.Opponent === pais);

    // Verificar si se encontraron datos para el pais
    if (datosPais.length === 0) {
        return `No se encontraron datos para `, pais ,` como equipo u oponente.`;
    }

    // Calcular la suma total de intentos
    const sumaAttempts = datosPais.reduce((total, l) => total + parseInt(l.Attempts), 0);

    // Calcular la media de intentos
    const mediaAttempts = sumaAttempts / datosPais.length;

    return mediaAttempts;
}
//ahmed

const countryName = "United States";

const filteredData = ahmed_data.filter(row => row.country === countryName);

if (filteredData.length === 0) {
    console.log(`No hay datos disponibles para ${countryName}`);
  } else {
    const totalOverallScore = filteredData.reduce((acc, row) => acc + row.overallScore, 0);
  
    const averageOverallScore = totalOverallScore / filteredData.length;
  
    console.log(`La media de los puntajes generales para ${countryName} es: ${averageOverallScore.toFixed(2)}`);
  }