const data = [
    { country: "Hong Kong SAR, China", year: 2017, overallScore: 9.07, sizeOfGovernment: 8.57, legalSystemsAndPropertyRight: 8.16, soundMoney: 9.63, freedomToTradeInternationally: 9.60, regulation: 9.40 },
    { country: "Singapore", year: 2017, overallScore: 8.82, sizeOfGovernment: 7.52, legalSystemsAndPropertyRight: 8.36, soundMoney: 9.85, freedomToTradeInternationally: 9.55, regulation: 8.79 },
    { country: "New Zealand", year: 2017, overallScore: 8.72, sizeOfGovernment: 6.64, legalSystemsAndPropertyRight: 9.17, soundMoney: 9.53, freedomToTradeInternationally: 8.95, regulation: 9.32 },
    { country: "Switzerland", year: 2017, overallScore: 8.57, sizeOfGovernment: 7.72, legalSystemsAndPropertyRight: 8.94, soundMoney: 9.88, freedomToTradeInternationally: 8.08, regulation: 8.23 },
    { country: "United States", year: 2017, overallScore: 8.46, sizeOfGovernment: 7.36, legalSystemsAndPropertyRight: 8.01, soundMoney: 9.77, freedomToTradeInternationally: 8.19, regulation: 8.98 },
    { country: "Australia", year: 2017, overallScore: 8.29, sizeOfGovernment: 6.77, legalSystemsAndPropertyRight: 8.56, soundMoney: 9.58, freedomToTradeInternationally: 8.11, regulation: 8.41 },
    { country: "United Kingdom", year: 2017, overallScore: 8.28, sizeOfGovernment: 6.56, legalSystemsAndPropertyRight: 8.23, soundMoney: 9.68, freedomToTradeInternationally: 8.64, regulation: 8.28 },
    { country: "Denmark", year: 2017, overallScore: 8.22, sizeOfGovernment: 5.14, legalSystemsAndPropertyRight: 8.97, soundMoney: 9.68, freedomToTradeInternationally: 8.86, regulation: 8.43 },
    { country: "Canada", year: 2017, overallScore: 8.22, sizeOfGovernment: 6.66, legalSystemsAndPropertyRight: 8.38, soundMoney: 9.57, freedomToTradeInternationally: 8.12, regulation: 8.37 },
    { country: "Ireland", year: 2017, overallScore: 8.18, sizeOfGovernment: 6.44, legalSystemsAndPropertyRight: 7.90, soundMoney: 9.28, freedomToTradeInternationally: 8.92, regulation: 8.33 },
    { country: "Estonia", year: 2017, overallScore: 8.11, sizeOfGovernment: 6.40, legalSystemsAndPropertyRight: 7.84, soundMoney: 9.08, freedomToTradeInternationally: 8.93, regulation: 8.31 },
    { country: "Luxembourg", year: 2017, overallScore: 8.11, sizeOfGovernment: 5.76, legalSystemsAndPropertyRight: 8.61, soundMoney: 9.17, freedomToTradeInternationally: 8.86, regulation: 8.14 },
    { country: "Chile", year: 2017, overallScore: 8.11, sizeOfGovernment: 8.06, legalSystemsAndPropertyRight: 6.94, soundMoney: 9.66, freedomToTradeInternationally: 8.66, regulation: 7.26 },
    { country: "Iceland", year: 2017, overallScore: 8.07, sizeOfGovernment: 6.20, legalSystemsAndPropertyRight: 8.72, soundMoney: 9.65, freedomToTradeInternationally: 7.98, regulation: 7.82 },
    { country: "Taiwan", year: 2017, overallScore: 8.07, sizeOfGovernment: 7.52, legalSystemsAndPropertyRight: 7.19, soundMoney: 9.75, freedomToTradeInternationally: 8.15, regulation: 7.74 },
    { country: "Lithuania", year: 2017, overallScore: 8.06, sizeOfGovernment: 7.38, legalSystemsAndPropertyRight: 7.29, soundMoney: 9.02, freedomToTradeInternationally: 8.67, regulation: 7.96 },
    { country: "Mauritius", year: 2017, overallScore: 8.05, sizeOfGovernment: 7.92, legalSystemsAndPropertyRight: 6.93, soundMoney: 9.51, freedomToTradeInternationally: 8.75, regulation: 7.15 },
    { country: "Malta", year: 2017, overallScore: 8.04, sizeOfGovernment: 7.05, legalSystemsAndPropertyRight: 6.75, soundMoney: 9.36, freedomToTradeInternationally: 8.93, regulation: 8.11 },
    { country: "Germany", year: 2017, overallScore: 8.04, sizeOfGovernment: 6.07, legalSystemsAndPropertyRight: 8.20, soundMoney: 9.26, freedomToTradeInternationally: 8.65, regulation: 8.03 },
    { country: "Georgia", year: 2017, overallScore: 8.00, sizeOfGovernment: 7.97, legalSystemsAndPropertyRight: 6.21, soundMoney: 8.92, freedomToTradeInternationally: 8.77, regulation: 8.11 },
    { country: "Latvia", year: 2017, overallScore: 8.00, sizeOfGovernment: 7.16, legalSystemsAndPropertyRight: 6.99, soundMoney: 9.90, freedomToTradeInternationally: 8.75, regulation: 8.00 },
    { country: "Czechia", year: 2017, overallScore: 8.00, sizeOfGovernment: 6.68, legalSystemsAndPropertyRight: 7.23, soundMoney: 9.57, freedomToTradeInternationally: 8.81, regulation: 7.71 },
    { country: "Finland", year: 2017, overallScore: 7.99, sizeOfGovernment: 5.00, legalSystemsAndPropertyRight: 8.84, soundMoney: 9.21, freedomToTradeInternationally: 8.58, regulation: 8.33 },
    { country: "Japan", year: 2017, overallScore: 7.98, sizeOfGovernment: 5.80, legalSystemsAndPropertyRight: 7.85, soundMoney: 9.75, freedomToTradeInternationally: 8.52, regulation: 7.97 },
    { country: "Norway", year: 2017, overallScore: 7.97, sizeOfGovernment: 5.34, legalSystemsAndPropertyRight: 9.03, soundMoney: 9.53, freedomToTradeInternationally: 8.26, regulation: 7.69 },
    { country: "Netherlands", year: 2017, overallScore: 7.95, sizeOfGovernment: 4.91, legalSystemsAndPropertyRight: 8.59, soundMoney: 9.23, freedomToTradeInternationally: 9.06, regulation: 7.97 },
    { country: "Sweden", year: 2017, overallScore: 7.92, sizeOfGovernment: 4.81, legalSystemsAndPropertyRight: 8.51, soundMoney: 9.66, freedomToTradeInternationally: 8.63, regulation: 8.01 },
    { country: "Austria", year: 2017, overallScore: 7.91, sizeOfGovernment: 5.69, legalSystemsAndPropertyRight: 8.46, soundMoney: 9.23, freedomToTradeInternationally: 8.57, regulation: 7.61 },
    { country: "Romania", year: 2017, overallScore: 7.88, sizeOfGovernment: 7.42, legalSystemsAndPropertyRight: 6.64, soundMoney: 9.53, freedomToTradeInternationally: 8.67, regulation: 7.17 },
    { country: "Cyprus", year: 2017, overallScore: 7.86, sizeOfGovernment: 7.47, legalSystemsAndPropertyRight: 6.42, soundMoney: 9.16, freedomToTradeInternationally: 8.76, regulation: 7.50 },
    { country: "Panama", year: 2017, overallScore: 7.79, sizeOfGovernment: 7.97, legalSystemsAndPropertyRight: 5.77, soundMoney: 9.44, freedomToTradeInternationally: 8.82, regulation: 6.94 },
    { country: "Spain", year: 2017, overallScore: 7.76, sizeOfGovernment: 6.24, legalSystemsAndPropertyRight: 7.33, soundMoney: 9.20, freedomToTradeInternationally: 8.55, regulation: 7.50 },
    { country: "Korea, Rep.", year: 2017, overallScore: 7.76, sizeOfGovernment: 6.99, legalSystemsAndPropertyRight: 6.78, soundMoney: 9.67, freedomToTradeInternationally: 7.97, regulation: 7.39 },
    { country: "Bulgaria", year: 2017, overallScore: 7.75, sizeOfGovernment: 7.67, legalSystemsAndPropertyRight: 5.65, soundMoney: 9.54, freedomToTradeInternationally: 8.60, regulation: 7.27 },
    { country: "Peru", year: 2017, overallScore: 7.74, sizeOfGovernment: 7.71, legalSystemsAndPropertyRight: 5.39, soundMoney: 9.65, freedomToTradeInternationally: 8.73, regulation: 7.21 },
    { country: "Portugal", year: 2017, overallScore: 7.71, sizeOfGovernment: 6.27, legalSystemsAndPropertyRight: 7.39, soundMoney: 9.20, freedomToTradeInternationally: 8.72, regulation: 6.98 },
    { country: "France", year: 2017, overallScore: 7.70, sizeOfGovernment: 5.37, legalSystemsAndPropertyRight: 7.59, soundMoney: 9.28, freedomToTradeInternationally: 8.78, regulation: 7.47 },
    { country: "Slovak Republic", year: 2017, overallScore: 7.69, sizeOfGovernment: 6.48, legalSystemsAndPropertyRight: 6.64, soundMoney: 9.27, freedomToTradeInternationally: 8.65, regulation: 7.42 },
    { country: "Albania", year: 2017, overallScore: 7.69, sizeOfGovernment: 7.52, legalSystemsAndPropertyRight: 5.34, soundMoney: 9.81, freedomToTradeInternationally: 8.54, regulation: 7.24 },
    { country: "Costa Rica", year: 2017, overallScore: 7.69, sizeOfGovernment: 7.39, legalSystemsAndPropertyRight: 6.40, soundMoney: 9.72, freedomToTradeInternationally: 8.32, regulation: 6.63 },
    { country: "Guatemala", year: 2017, overallScore: 7.67, sizeOfGovernment: 9.24, legalSystemsAndPropertyRight: 4.60, soundMoney: 9.58, freedomToTradeInternationally: 8.41, regulation: 6.52 },
    { country: "Israel", year: 2017, overallScore: 7.66, sizeOfGovernment: 6.47, legalSystemsAndPropertyRight: 6.20, soundMoney: 9.74, freedomToTradeInternationally: 8.72, regulation: 7.18 },
    { country: "Belgium", year: 2017, overallScore: 7.65, sizeOfGovernment: 4.73, legalSystemsAndPropertyRight: 7.60, soundMoney: 9.21, freedomToTradeInternationally: 8.77, regulation: 7.92 },
    { country: "Jamaica", year: 2017, overallScore: 7.53, sizeOfGovernment: 8.11, legalSystemsAndPropertyRight: 5.50, soundMoney: 9.21, freedomToTradeInternationally: 7.23, regulation: 7.62 }]

    
    
    console.log(data);

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
  
  
  // Calcular la media de overallScore para los países que empiecen con la letra "S"
  const mediaOverallScoreS = calcularMediaPorLetra(data, 'S');
  console.log("Media de overallScore para países que empiezan por 'S':", mediaOverallScoreS);

module.exports= data;
