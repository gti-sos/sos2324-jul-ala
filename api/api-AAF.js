const API_BASE_AAF = "/api/v1/economicfreedom_stats";

var data = [];

module.exports = (app) => {
    
    // GET => Lista todos los datos
    
    app.get(API_BASE_AAF+"/",(req,res)=>{
        res.status(200).send(JSON.stringify(data));
    }),

    // GET => loadInitialData (al hacer un GET cree 10 o más datos en el array de NodeJS si está vacío)
    app.get(API_BASE_AAF+"/loadInitialData",(req,res) => {
        if(data.length === 0){
            let newdata = [
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
                { country: "Latvia", year: 2017, overallScore: 8.00, sizeOfGovernment: 7.16, legalSystemsAndPropertyRight: 6.99, soundMoney: 9.90, freedomToTradeInternationally: 8.75, regulation: 8.00 }
            ]
            for(let i=0; i<newdata.length; i++){
                data.push(newdata[i]);
            }
            res.sendStatus(201, "Data created");  
        } else {
            res.status(200).send(JSON.stringify(data));
        }
    }),

    // GET => Get data by country

    app.get(API_BASE_AAF + "/:country",(req,res)=>{
        const PAIS = req.params.country;
        const countryDatos = data.filter(p => p.country === PAIS);

        if(countryDatos.length > 0){
            res.status(200).send(JSON.stringify(countryDatos));
        } else {
            res.sendStatus(404, "NOT FOUND");
        }
    }),


    // POST => Create new line of data

    app.post(API_BASE_AAF + "/", (req,res) => {
        let newdata = req.body;
        const equal = data.some(old => old.country === newdata.country && old.overallScore === newdata.overallScore 
            && old.sizeOfGovernment === newdata.sizeOfGovernment && old.legalSystemsAndPropertyRight === newdata.legalSystemsAndPropertyRight
            && old.soundMoney === newdata.soundMoney && old.freedomToTradeInternationally === newdata.freedomToTradeInternationally && old.regulation === newdata.regulation);
        if(equal){
            // POST not allowed due to resource already existing
            res.sendStatus(409, "CONFLICT");
        } else if (!newdata || Object.keys(newdata).length === 0){
            // If not valid JSON received
            res.sendStatus(400, "BAD REQUEST");
        } else {
            // Valid POST
            data.push(newdata);
            res.sendStatus(201, "CREATED");
        }
    }),


    // PUT => Can't update root directory
    app.put(API_BASE_AAF + "/", (req,res)=> {
        let newdata = req.body;
        res.sendStatus(405,"METHOD NOW ALLOWED");
    }),


    //PUT => Update resource by parameter
    app.put(API_BASE_AAF + "/:overallScore", (req,res) =>{
        const overallScore = parseFloat(req.params.overallScore);
        let newdata = req.body;

        const index = data.findIndex(p => p.overallScore === overallScore);

        if(index === -1){
            res.sendStatus(404, "NOT FOUND");
        } else if (!newdata || Object.keys(newdata).length === 0 || newdata.overallScore !== overallScore){
            res.sendStatus(400, "BAD REQUEST");
        } else {
            data[index] = newdata;
            res.sendStatus(200, "OK");
        }
    }),

    // DELETE => Delete all data

    app.delete(API_BASE_AAF + "/", (req,res) => {
        data.splice(0, data.length);
        res.status(200).send("ALL DATA DELETED");
    }),


    // DELETE => Delete specific data
    app.delete(API_BASE_AAF + "/:overallScore", (req,res) => {
        const overallScore = parseFloat(req.params.overallScore);
        const nuevosDatos = data.filter(entry => entry.listing_overallScore !== overallScore);

        if(nuevosDatos.length < data.length){
            data = nuevosDatos;
            res.sendStatus(200, "OK");
        } else {
            res.sendStatus(404, "NOT FOUND");
        }
    }),


    // POST => Try to use not allowed method
    app.post(API_BASE_AAF + "/:country", (req,res) =>{
        const PAIS = req.params.country;
        let newdata = req.body;
        res.sendStatus(405, "METHOD NOT ALLOWED");
    });
};