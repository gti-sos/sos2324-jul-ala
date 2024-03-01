const data = [
    { country: "España", date: "IV Trim 2018", trimestral_pib: "305.818 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "2,20%" },
    { country: "Alemania", date: "IV Trim 2018", trimestral_pib: "854.124 M€", trimestral_variable_pib: "0,90%", annual_variable_pib: "0,10%" },
    { country: "Reino Unido", date: "IV Trim 2018", trimestral_pib: "610.918 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "1,20%" },
    { country: "Francia", date: "IV Trim 2018", trimestral_pib: "598.352 M€", trimestral_variable_pib: "0,50%", annual_variable_pib: "1,50%" },
    { country: "Italia", date: "IV Trim 2018", trimestral_pib: "444.875 M€", trimestral_variable_pib: "0,30%", annual_variable_pib: "0,30%" },
    { country: "Portugal", date: "IV Trim 2018", trimestral_pib: "51.989 M€", trimestral_variable_pib: "0,60%", annual_variable_pib: "2,70%" },
    { country: "Zona Euro", date: "IV Trim 2018", trimestral_pib: "2.938.241 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "1,20%" },
    { country: "Estados Unidos", date: "IV Trim 2018", trimestral_pib: "4.581.625 M€", trimestral_variable_pib: "0,10%", annual_variable_pib: "2,10%" },
    { country: "Japón", date: "IV Trim 2018", trimestral_pib: "1.074.283 M€", trimestral_variable_pib: "-0,10%", annual_variable_pib: "-0,30%" },
    { country: "China", date: "IV Trim 2018", trimestral_variable_pib: "1,30%", annual_variable_pib: "6,50%" },
    { country: "Argentina", date: "IV Trim 2018", trimestral_pib: "99.846 M€", trimestral_variable_pib: "-1,60%", annual_variable_pib: "-6,40%" },
    { country: "Austria", date: "IV Trim 2018", trimestral_pib: "98.065 M€", trimestral_variable_pib: "1,30%", annual_variable_pib: "2,60%" },
    { country: "Australia", date: "IV Trim 2018", trimestral_pib: "303.808 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,50%" },
    { country: "Bélgica", date: "IV Trim 2018", trimestral_pib: "117.271 M€", trimestral_variable_pib: "1,00%", annual_variable_pib: "2,20%" },
    { country: "Bulgaria", date: "IV Trim 2018", trimestral_pib: "14.293 M€", trimestral_variable_pib: "0,90%", annual_variable_pib: "3,30%" },
    { country: "Brasil", date: "IV Trim 2018", trimestral_pib: "411.393 M€", trimestral_variable_pib: "-0,40%", annual_variable_pib: "1,10%" },
    { country: "Canadá", date: "IV Trim 2018", trimestral_pib: "371.308 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,70%" },
    { country: "Suiza", date: "IV Trim 2018", trimestral_pib: "157.082 M€", trimestral_variable_pib: "0,20%", annual_variable_pib: "2,00%" },
    { country: "Chile", date: "IV Trim 2018", trimestral_pib: "62.299 M€", trimestral_variable_pib: "1,20%", annual_variable_pib: "3,30%" },
    { country: "Colombia", date: "IV Trim 2018", trimestral_pib: "69.771 M€", trimestral_variable_pib: "0,10%", annual_variable_pib: "2,80%" },
    { country: "Costa Rica", date: "IV Trim 2018", trimestral_pib: "13.094 M€", trimestral_variable_pib: "-0,70%", annual_variable_pib: "0,40%" },
    { country: "Chipre", date: "IV Trim 2018", trimestral_pib: "5.548 M€", trimestral_variable_pib: "2,30%", annual_variable_pib: "6,30%" },
    { country: "Chequia", date: "IV Trim 2018", trimestral_pib: "53.419 M€", trimestral_variable_pib: "0,80%", annual_variable_pib: "2,60%" },
    { country: "Dinamarca", date: "IV Trim 2018", trimestral_pib: "76.815 M€", trimestral_variable_pib: "0,50%", annual_variable_pib: "2,10%" },
    { country: "Estonia", date: "IV Trim 2018", trimestral_pib: "6.722 M€", trimestral_variable_pib: "1,20%", annual_variable_pib: "3,60%" },
    { country: "Finlandia", date: "IV Trim 2018", trimestral_pib: "58.941 M€", trimestral_variable_pib: "0%", annual_variable_pib: "0,10%" },
    { country: "Grecia", date: "IV Trim 2018", trimestral_pib: "45.158 M€", trimestral_variable_pib: "0,70%", annual_variable_pib: "2,20%" },
    { country: "Croacia", date: "IV Trim 2018", trimestral_pib: "13.408 M€", trimestral_variable_pib: "0,60%", annual_variable_pib: "3,10%" },
    { country: "Hungría", date: "IV Trim 2018", trimestral_pib: "34.799 M€", trimestral_variable_pib: "1,00%", annual_variable_pib: "5,30%" }
];


console.log(data);

function calcularMedia(datos, campoGeografico, valorGeografico, campoNumerico) {
    // Filtrar los datos para obtener solo los que coinciden con el valor geográfico proporcionado
    const datosFiltrados = datos.filter(item => item.country === valorGeografico);

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


// Ejemplo de uso:
const mediaPibEspaña = calcularMedia(data, "country", "España", "trimestral_pib");
console.log("Media del PIB trimestral para España:", mediaPibEspaña);

const mediaVariablePibChina = calcularMedia(data, "country", "China", "trimestral_variable_pib");
console.log("Media de la variable del PIB trimestral para China:", mediaVariablePibChina);

module.exports = data;
