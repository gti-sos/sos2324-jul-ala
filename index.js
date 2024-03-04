let cool = require("cool-ascii-faces");
let express = require("express");
let bodyParser = require("body-parser");
let API_ALA = require("./api/api-ALA")
let API_AAF = require("./api/api-AAF")
let API_ARM = require("./api/api-ARM")


const adrian_data = require('./index-ALA.js')
const antonio_data = require('./index-ARM.js')
const ahmed_data = require('./index-AAF.js')

let app = express();
app.use(bodyParser.json());

const PORT = (process.env.PORT || 20000);

//api
API_ALA(app);
API_ARM(app);
API_AAF(app);


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
    const resultado = calcularMediaPorLetra(ahmed_data,"S")
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

function calcularMediaPorLetra(data, letra) {
    // Filtrar los datos para obtener solo los países que empiecen por la letra especificada
    const paisesConLetra = data.filter(dato => dato.country.charAt(0).toLowerCase() === letra.toLowerCase());

    // Verificar si hay países que comiencen con la letra especificada
    if (paisesConLetra.length === 0) {
        return "No hay países que empiecen con la letra " + letra;
    }

    // Obtener los valores de overallScore de los países seleccionados
    const overallScores = paisesConLetra.map(dato => dato.overallScore);

    // Calcular la media de overallScore
    const media = overallScores.reduce((acumulador, valor) => acumulador + valor, 0) / overallScores.length;

    return media;
}

