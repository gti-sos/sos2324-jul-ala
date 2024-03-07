const API_BASE_ARM = "/api/v1/manofthematch";

function validarDatos(req, res, next) {
    const jsonRecibido = req.body;
    const esquemaEsperado = {
        "Date": "string",
        "Team": "string",
        "Opponent": "string",
        "GoalScored": "string",
        "BallPossession": "string",
        "Attempts": "string",
        "OnTarget": "string",
        "OffTarget": "string",
        "Blocked": "string",
        "Corners": "string",
        "Offsides": "string",
        "FreeKicks": "string",
        "Saves": "string",
        "PassAccuracy": "string",
        "Passes": "string",
        "DistanceCovered": "string",
        "FoulsCommitted": "string",
        "YellowCard": "string",
        "Yellow_Red": "string",
        "Red": "string",
        "ManoftheMatch": "string",
        "stGoal": "string",
        "Round": "string",
        "PSO": "string",
        "GoalsinPSO": "string",
        "Owngoals": "string",
        "OwngoalTime": "string"
        };
        const keysRecibidas = Object.keys(jsonRecibido);
        const keysEsperadas = Object.keys(esquemaEsperado);
        const keysFaltantes = keysEsperadas.filter(key => !keysRecibidas.includes(key));
        
        //comprueba q no haya claves de mas
        const clavesExtra = keysRecibidas.filter(key => !keysEsperadas.includes(key));
        if (clavesExtra.length > 0) {
            console.error(`Se encontraron claves adicionales en el JSON: ${clavesExtra.join(', ')}`);
            return res.sendStatus(400, "Bad request");
        }
    
        //comprueba q no haya claves de menos
        if (keysFaltantes.length > 0) {
            console.error(`Faltan las siguientes claves en el JSON: ${keysFaltantes.join(', ')}` );
            return res.sendStatus(400, "Bad request");
        }
    
        //comprueba q sean los tipos q son
        const erroresTipo = [];
        keysEsperadas.forEach(key => {
            const tipoEsperado = esquemaEsperado[key];
            const valor = jsonRecibido[key];
            if (typeof valor !== tipoEsperado) {
                erroresTipo.push(`El valor de '${key}' debe ser de tipo '${tipoEsperado}'`);
            }
        });
        if (erroresTipo.length > 0) {
            console.error(`Errores de tipo: ${erroresTipo.join(', ')}`);
            return res.sendStatus(400, "Bad request");
        }
    
        next();
    }
var data = [];

module.exports = (app) => {
    
    // GET => Lista todos los datos
    
    app.get(API_BASE_ARM+"/",(req,res)=>{
        db.find({},(err, manofthematch)=>{
            if(err) {
                res.sendStatus(500, "Internal Error");
            }else{
                res.send(JSON.stringify(manofthematch));
            }
        })
    }),

    // GET => loadInitialData (al hacer un GET cree 10 o más datos en el array de NodeJS si está vacío)
    app.get(API_BASE_ARM+"/loadInitialData",(req,res) => {
        db.insert(data);
        if(data.length === 0){
            let newdata = [
                {Date:"14-06-2018",Team:"Russia",Opponent:"Saudi Arabia",GoalScored:"5",BallPossession:"40",Attempts:"13",OnTarget:"7",OffTarget:"3",Blocked:"3",Corners:"6",Offsides:"3",FreeKicks:"11",Saves:"0",PassAccuracy:"78",Passes:"306",DistanceCovered:"118",FoulsCommitted:"22",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"12",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"14-06-2018",Team:"Saudi Arabia",Opponent:"Russia",GoalScored:"0",BallPossession:"60",Attempts:"6",OnTarget:"0",OffTarget:"3",Blocked:"3",Corners:"2",Offsides:"1",FreeKicks:"25",Saves:"2",PassAccuracy:"86",Passes:"511",DistanceCovered:"105",FoulsCommitted:"10",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"15-06-2018",Team:"Egypt",Opponent:"Uruguay",GoalScored:"0",BallPossession:"43",Attempts:"8",OnTarget:"3",OffTarget:"3",Blocked:"2",Corners:"0",Offsides:"1",FreeKicks:"7",Saves:"3",PassAccuracy:"78",Passes:"395",DistanceCovered:"112",FoulsCommitted:"12",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"15-06-2018",Team:"Uruguay",Opponent:"Egypt",GoalScored:"1",BallPossession:"57",Attempts:"14",OnTarget:"4",OffTarget:"6",Blocked:"4",Corners:"5",Offsides:"1",FreeKicks:"13",Saves:"3",PassAccuracy:"86",Passes:"589",DistanceCovered:"111",FoulsCommitted:"6",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"89",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"15-06-2018",Team:"Morocco",Opponent:"Iran",GoalScored:"0",BallPossession:"64",Attempts:"13",OnTarget:"3",OffTarget:"6",Blocked:"4",Corners:"5",Offsides:"0",FreeKicks:"14",Saves:"2",PassAccuracy:"86",Passes:"433",DistanceCovered:"101",FoulsCommitted:"22",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"1",OwngoalTime:"90"},
                {Date:"15-06-2018",Team:"Iran",Opponent:"Morocco",GoalScored:"1",BallPossession:"36",Attempts:"8",OnTarget:"2",OffTarget:"5",Blocked:"1",Corners:"2",Offsides:"0",FreeKicks:"22",Saves:"2",PassAccuracy:"86",Passes:"194",DistanceCovered:"100",FoulsCommitted:"14",YellowCard:"3",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"90",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"15-06-2018",Team:"Portugal",Opponent:"Spain",GoalScored:"3",BallPossession:"39",Attempts:"8",OnTarget:"3",OffTarget:"2",Blocked:"3",Corners:"4",Offsides:"1",FreeKicks:"13",Saves:"2",PassAccuracy:"87",Passes:"366",DistanceCovered:"102",FoulsCommitted:"12",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"4",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"15-06-2018",Team:"Spain",Opponent:"Portugal",GoalScored:"3",BallPossession:"61",Attempts:"12",OnTarget:"5",OffTarget:"5",Blocked:"2",Corners:"5",Offsides:"3",FreeKicks:"13",Saves:"0",PassAccuracy:"93",Passes:"727",DistanceCovered:"103",FoulsCommitted:"10",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"24",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"16-06-2018",Team:"France",Opponent:"Australia",GoalScored:"2",BallPossession:"51",Attempts:"12",OnTarget:"5",OffTarget:"4",Blocked:"3",Corners:"5",Offsides:"0",FreeKicks:"19",Saves:"1",PassAccuracy:"87",Passes:"484",DistanceCovered:"103",FoulsCommitted:"16",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"58",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"16-06-2018",Team:"Australia",Opponent:"France",GoalScored:"1",BallPossession:"49",Attempts:"4",OnTarget:"1",OffTarget:"2",Blocked:"1",Corners:"1",Offsides:"0",FreeKicks:"16",Saves:"4",PassAccuracy:"85",Passes:"390",DistanceCovered:"111",FoulsCommitted:"19",YellowCard:"3",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"62",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"1",OwngoalTime:"81"},
                {Date:"16-06-2018",Team:"Argentina",Opponent:"Iceland",GoalScored:"1",BallPossession:"72",Attempts:"26",OnTarget:"7",OffTarget:"9",Blocked:"10",Corners:"10",Offsides:"0",FreeKicks:"15",Saves:"2",PassAccuracy:"92",Passes:"718",DistanceCovered:"101",FoulsCommitted:"10",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"19",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"16-06-2018",Team:"Iceland",Opponent:"Argentina",GoalScored:"1",BallPossession:"28",Attempts:"9",OnTarget:"3",OffTarget:"5",Blocked:"1",Corners:"2",Offsides:"0",FreeKicks:"10",Saves:"7",PassAccuracy:"67",Passes:"189",DistanceCovered:"105",FoulsCommitted:"15",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"23",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"16-06-2018",Team:"Peru",Opponent:"Denmark",GoalScored:"0",BallPossession:"52",Attempts:"18",OnTarget:"6",OffTarget:"7",Blocked:"5",Corners:"3",Offsides:"5",FreeKicks:"21",Saves:"2",PassAccuracy:"85",Passes:"394",DistanceCovered:"104",FoulsCommitted:"10",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"16-06-2018",Team:"Denmark",Opponent:"Peru",GoalScored:"1",BallPossession:"48",Attempts:"10",OnTarget:"3",OffTarget:"5",Blocked:"2",Corners:"7",Offsides:"3",FreeKicks:"15",Saves:"6",PassAccuracy:"82",Passes:"342",DistanceCovered:"110",FoulsCommitted:"18",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"59",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"17-06-2018",Team:"Croatia",Opponent:"Nigeria",GoalScored:"2",BallPossession:"54",Attempts:"11",OnTarget:"2",OffTarget:"7",Blocked:"2",Corners:"6",Offsides:"2",FreeKicks:"17",Saves:"2",PassAccuracy:"84",Passes:"462",DistanceCovered:"104",FoulsCommitted:"20",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"32",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"17-06-2018",Team:"Nigeria",Opponent:"Croatia",GoalScored:"0",BallPossession:"46",Attempts:"14",OnTarget:"2",OffTarget:"5",Blocked:"7",Corners:"5",Offsides:"1",FreeKicks:"22",Saves:"1",PassAccuracy:"84",Passes:"388",DistanceCovered:"101",FoulsCommitted:"16",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:"32"},
                {Date:"17-06-2018",Team:"Costa Rica",Opponent:"Serbia",GoalScored:"0",BallPossession:"50",Attempts:"10",OnTarget:"3",OffTarget:"3",Blocked:"4",Corners:"5",Offsides:"1",FreeKicks:"18",Saves:"2",PassAccuracy:"83",Passes:"428",DistanceCovered:"107",FoulsCommitted:"18",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"17-06-2018",Team:"Serbia",Opponent:"Costa Rica",GoalScored:"1",BallPossession:"50",Attempts:"10",OnTarget:"3",OffTarget:"5",Blocked:"2",Corners:"4",Offsides:"3",FreeKicks:"19",Saves:"3",PassAccuracy:"83",Passes:"392",DistanceCovered:"109",FoulsCommitted:"15",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"56",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"17-06-2018",Team:"Germany",Opponent:"Mexico",GoalScored:"0",BallPossession:"60",Attempts:"25",OnTarget:"9",OffTarget:"9",Blocked:"7",Corners:"8",Offsides:"1",FreeKicks:"17",Saves:"3",PassAccuracy:"88",Passes:"595",DistanceCovered:"110",FoulsCommitted:"10",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"17-06-2018",Team:"Mexico",Opponent:"Germany",GoalScored:"1",BallPossession:"40",Attempts:"12",OnTarget:"4",OffTarget:"6",Blocked:"2",Corners:"1",Offsides:"2",FreeKicks:"11",Saves:"9",PassAccuracy:"82",Passes:"281",DistanceCovered:"106",FoulsCommitted:"15",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"35",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"17-06-2018",Team:"Brazil",Opponent:"Switzerland",GoalScored:"1",BallPossession:"52",Attempts:"20",OnTarget:"4",OffTarget:"9",Blocked:"7",Corners:"7",Offsides:"1",FreeKicks:"19",Saves:"1",PassAccuracy:"88",Passes:"521",DistanceCovered:"103",FoulsCommitted:"12",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"20",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"17-06-2018",Team:"Switzerland",Opponent:"Brazil",GoalScored:"1",BallPossession:"48",Attempts:"6",OnTarget:"2",OffTarget:"4",Blocked:"0",Corners:"2",Offsides:"0",FreeKicks:"13",Saves:"3",PassAccuracy:"83",Passes:"436",DistanceCovered:"108",FoulsCommitted:"19",YellowCard:"3",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"50",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"18-06-2018",Team:"Sweden",Opponent:"Korea Republic",GoalScored:"1",BallPossession:"52",Attempts:"15",OnTarget:"4",OffTarget:"5",Blocked:"6",Corners:"6",Offsides:"1",FreeKicks:"23",Saves:"0",PassAccuracy:"84",Passes:"417",DistanceCovered:"102",FoulsCommitted:"20",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"65",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"18-06-2018",Team:"Korea Republic",Opponent:"Sweden",GoalScored:"0",BallPossession:"48",Attempts:"5",OnTarget:"0",OffTarget:"2",Blocked:"3",Corners:"5",Offsides:"0",FreeKicks:"21",Saves:"3",PassAccuracy:"79",Passes:"351",DistanceCovered:"103",FoulsCommitted:"23",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"18-06-2018",Team:"Belgium",Opponent:"Panama",GoalScored:"3",BallPossession:"61",Attempts:"15",OnTarget:"6",OffTarget:"7",Blocked:"2",Corners:"9",Offsides:"1",FreeKicks:"21",Saves:"2",PassAccuracy:"89",Passes:"544",DistanceCovered:"102",FoulsCommitted:"17",YellowCard:"3",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"47",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"18-06-2018",Team:"Panama",Opponent:"Belgium",GoalScored:"0",BallPossession:"39",Attempts:"6",OnTarget:"2",OffTarget:"4",Blocked:"0",Corners:"3",Offsides:"3",FreeKicks:"18",Saves:"2",PassAccuracy:"82",Passes:"317",DistanceCovered:"100",FoulsCommitted:"18",YellowCard:"5",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"18-06-2018",Team:"Tunisia",Opponent:"England",GoalScored:"1",BallPossession:"41",Attempts:"6",OnTarget:"1",OffTarget:"3",Blocked:"2",Corners:"2",Offsides:"2",FreeKicks:"11",Saves:"5",PassAccuracy:"82",Passes:"326",DistanceCovered:"103",FoulsCommitted:"14",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"11",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"18-06-2018",Team:"England",Opponent:"Tunisia",GoalScored:"2",BallPossession:"59",Attempts:"17",OnTarget:"7",OffTarget:"7",Blocked:"3",Corners:"7",Offsides:"3",FreeKicks:"16",Saves:"0",PassAccuracy:"91",Passes:"492",DistanceCovered:"105",FoulsCommitted:"8",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"35",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"19-06-2018",Team:"Colombia",Opponent:"Japan",GoalScored:"1",BallPossession:"41",Attempts:"8",OnTarget:"3",OffTarget:"1",Blocked:"4",Corners:"3",Offsides:"3",FreeKicks:"10",Saves:"4",PassAccuracy:"82",Passes:"352",DistanceCovered:"93",FoulsCommitted:"15",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"39",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"19-06-2018",Team:"Japan",Opponent:"Colombia",GoalScored:"2",BallPossession:"59",Attempts:"14",OnTarget:"6",OffTarget:"5",Blocked:"3",Corners:"6",Offsides:"1",FreeKicks:"17",Saves:"2",PassAccuracy:"87",Passes:"565",DistanceCovered:"101",FoulsCommitted:"9",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"6",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"19-06-2018",Team:"Poland",Opponent:"Senegal",GoalScored:"1",BallPossession:"57",Attempts:"10",OnTarget:"4",OffTarget:"5",Blocked:"1",Corners:"3",Offsides:"3",FreeKicks:"18",Saves:"1",PassAccuracy:"88",Passes:"552",DistanceCovered:"110",FoulsCommitted:"8",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"37",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:"37"},
                {Date:"19-06-2018",Team:"Senegal",Opponent:"Poland",GoalScored:"2",BallPossession:"43",Attempts:"8",OnTarget:"2",OffTarget:"4",Blocked:"2",Corners:"3",Offsides:"3",FreeKicks:"11",Saves:"3",PassAccuracy:"81",Passes:"328",DistanceCovered:"107",FoulsCommitted:"15",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"60",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"19-06-2018",Team:"Russia",Opponent:"Egypt",GoalScored:"3",BallPossession:"47",Attempts:"11",OnTarget:"3",OffTarget:"5",Blocked:"3",Corners:"7",Offsides:"0",FreeKicks:"10",Saves:"0",PassAccuracy:"76",Passes:"380",DistanceCovered:"115",FoulsCommitted:"11",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"59",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"19-06-2018",Team:"Egypt",Opponent:"Russia",GoalScored:"1",BallPossession:"53",Attempts:"13",OnTarget:"1",OffTarget:"8",Blocked:"4",Corners:"4",Offsides:"0",FreeKicks:"11",Saves:"1",PassAccuracy:"81",Passes:"438",DistanceCovered:"110",FoulsCommitted:"10",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"47",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:"47"},
                {Date:"20-06-2018",Team:"Portugal",Opponent:"Morocco",GoalScored:"1",BallPossession:"47",Attempts:"10",OnTarget:"2",OffTarget:"4",Blocked:"4",Corners:"5",Offsides:"1",FreeKicks:"24",Saves:"4",PassAccuracy:"76",Passes:"387",DistanceCovered:"105",FoulsCommitted:"19",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"4",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"20-06-2018",Team:"Morocco",Opponent:"Portugal",GoalScored:"0",BallPossession:"53",Attempts:"16",OnTarget:"4",OffTarget:"10",Blocked:"2",Corners:"7",Offsides:"1",FreeKicks:"20",Saves:"1",PassAccuracy:"77",Passes:"466",DistanceCovered:"107",FoulsCommitted:"23",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"20-06-2018",Team:"Uruguay",Opponent:"Saudi Arabia",GoalScored:"1",BallPossession:"47",Attempts:"13",OnTarget:"4",OffTarget:"6",Blocked:"3",Corners:"3",Offsides:"1",FreeKicks:"15",Saves:"3",PassAccuracy:"88",Passes:"521",DistanceCovered:"101",FoulsCommitted:"10",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"23",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"20-06-2018",Team:"Saudi Arabia",Opponent:"Uruguay",GoalScored:"0",BallPossession:"53",Attempts:"8",OnTarget:"3",OffTarget:"3",Blocked:"2",Corners:"4",Offsides:"2",FreeKicks:"11",Saves:"3",PassAccuracy:"86",Passes:"590",DistanceCovered:"100",FoulsCommitted:"13",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"20-06-2018",Team:"Iran",Opponent:"Spain",GoalScored:"0",BallPossession:"30",Attempts:"5",OnTarget:"0",OffTarget:"5",Blocked:"0",Corners:"2",Offsides:"2",FreeKicks:"15",Saves:"2",PassAccuracy:"69",Passes:"219",DistanceCovered:"106",FoulsCommitted:"14",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"20-06-2018",Team:"Spain",Opponent:"Iran",GoalScored:"1",BallPossession:"70",Attempts:"17",OnTarget:"3",OffTarget:"6",Blocked:"8",Corners:"6",Offsides:"1",FreeKicks:"16",Saves:"0",PassAccuracy:"89",Passes:"805",DistanceCovered:"105",FoulsCommitted:"14",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"54",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"21-06-2018",Team:"Denmark",Opponent:"Australia",GoalScored:"1",BallPossession:"49",Attempts:"10",OnTarget:"5",OffTarget:"5",Blocked:"0",Corners:"3",Offsides:"1",FreeKicks:"5",Saves:"4",PassAccuracy:"88",Passes:"458",DistanceCovered:"112",FoulsCommitted:"7",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"7",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"21-06-2018",Team:"Australia",Opponent:"Denmark",GoalScored:"1",BallPossession:"51",Attempts:"14",OnTarget:"5",OffTarget:"5",Blocked:"4",Corners:"5",Offsides:"0",FreeKicks:"8",Saves:"5",PassAccuracy:"85",Passes:"520",DistanceCovered:"114",FoulsCommitted:"5",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"38",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"21-06-2018",Team:"France",Opponent:"Peru",GoalScored:"1",BallPossession:"44",Attempts:"12",OnTarget:"4",OffTarget:"6",Blocked:"2",Corners:"5",Offsides:"0",FreeKicks:"16",Saves:"2",PassAccuracy:"77",Passes:"405",DistanceCovered:"103",FoulsCommitted:"11",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"34",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"21-06-2018",Team:"Peru",Opponent:"France",GoalScored:"0",BallPossession:"56",Attempts:"10",OnTarget:"2",OffTarget:"6",Blocked:"2",Corners:"3",Offsides:"1",FreeKicks:"11",Saves:"3",PassAccuracy:"81",Passes:"532",DistanceCovered:"102",FoulsCommitted:"15",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"21-06-2018",Team:"Argentina",Opponent:"Croatia",GoalScored:"0",BallPossession:"58",Attempts:"10",OnTarget:"3",OffTarget:"3",Blocked:"4",Corners:"5",Offsides:"3",FreeKicks:"26",Saves:"2",PassAccuracy:"81",Passes:"505",DistanceCovered:"101",FoulsCommitted:"15",YellowCard:"3",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"21-06-2018",Team:"Croatia",Opponent:"Argentina",GoalScored:"3",BallPossession:"42",Attempts:"15",OnTarget:"5",OffTarget:"6",Blocked:"4",Corners:"2",Offsides:"3",FreeKicks:"18",Saves:"3",PassAccuracy:"80",Passes:"372",DistanceCovered:"104",FoulsCommitted:"23",YellowCard:"4",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"53",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"22-06-2018",Team:"Brazil",Opponent:"Costa Rica",GoalScored:"2",BallPossession:"66",Attempts:"23",OnTarget:"9",OffTarget:"9",Blocked:"5",Corners:"10",Offsides:"3",FreeKicks:"14",Saves:"0",PassAccuracy:"90",Passes:"732",DistanceCovered:"105",FoulsCommitted:"11",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"90",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"22-06-2018",Team:"Costa Rica",Opponent:"Brazil",GoalScored:"0",BallPossession:"34",Attempts:"4",OnTarget:"0",OffTarget:"4",Blocked:"0",Corners:"1",Offsides:"3",FreeKicks:"14",Saves:"7",PassAccuracy:"73",Passes:"271",DistanceCovered:"109",FoulsCommitted:"11",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"22-06-2018",Team:"Nigeria",Opponent:"Iceland",GoalScored:"2",BallPossession:"58",Attempts:"16",OnTarget:"4",OffTarget:"6",Blocked:"6",Corners:"6",Offsides:"1",FreeKicks:"10",Saves:"3",PassAccuracy:"84",Passes:"473",DistanceCovered:"100",FoulsCommitted:"9",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"49",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"22-06-2018",Team:"Iceland",Opponent:"Nigeria",GoalScored:"0",BallPossession:"42",Attempts:"10",OnTarget:"3",OffTarget:"6",Blocked:"1",Corners:"5",Offsides:"0",FreeKicks:"10",Saves:"2",PassAccuracy:"75",Passes:"291",DistanceCovered:"106",FoulsCommitted:"10",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"22-06-2018",Team:"Serbia",Opponent:"Switzerland",GoalScored:"1",BallPossession:"42",Attempts:"12",OnTarget:"3",OffTarget:"7",Blocked:"2",Corners:"3",Offsides:"0",FreeKicks:"15",Saves:"3",PassAccuracy:"78",Passes:"309",DistanceCovered:"116",FoulsCommitted:"17",YellowCard:"4",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"5",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"22-06-2018",Team:"Switzerland",Opponent:"Serbia",GoalScored:"2",BallPossession:"58",Attempts:"20",OnTarget:"5",OffTarget:"8",Blocked:"7",Corners:"7",Offsides:"3",FreeKicks:"17",Saves:"2",PassAccuracy:"87",Passes:"547",DistanceCovered:"112",FoulsCommitted:"12",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"52",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"23-06-2018",Team:"Belgium",Opponent:"Tunisia",GoalScored:"5",BallPossession:"52",Attempts:"23",OnTarget:"12",OffTarget:"8",Blocked:"3",Corners:"5",Offsides:"3",FreeKicks:"16",Saves:"3",PassAccuracy:"84",Passes:"468",DistanceCovered:"104",FoulsCommitted:"12",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"6",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"23-06-2018",Team:"Tunisia",Opponent:"Belgium",GoalScored:"2",BallPossession:"48",Attempts:"15",OnTarget:"5",OffTarget:"6",Blocked:"4",Corners:"2",Offsides:"3",FreeKicks:"15",Saves:"6",PassAccuracy:"82",Passes:"477",DistanceCovered:"102",FoulsCommitted:"13",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"18",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"23-06-2018",Team:"Korea Republic",Opponent:"Mexico",GoalScored:"1",BallPossession:"41",Attempts:"17",OnTarget:"6",OffTarget:"2",Blocked:"9",Corners:"7",Offsides:"0",FreeKicks:"7",Saves:"3",PassAccuracy:"82",Passes:"346",DistanceCovered:"99",FoulsCommitted:"24",YellowCard:"4",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"90",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"23-06-2018",Team:"Mexico",Opponent:"Korea Republic",GoalScored:"2",BallPossession:"59",Attempts:"13",OnTarget:"5",OffTarget:"6",Blocked:"2",Corners:"5",Offsides:"0",FreeKicks:"24",Saves:"5",PassAccuracy:"89",Passes:"485",DistanceCovered:"97",FoulsCommitted:"7",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"26",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"23-06-2018",Team:"Germany",Opponent:"Sweden",GoalScored:"2",BallPossession:"71",Attempts:"16",OnTarget:"5",OffTarget:"4",Blocked:"7",Corners:"8",Offsides:"5",FreeKicks:"15",Saves:"5",PassAccuracy:"91",Passes:"699",DistanceCovered:"111",FoulsCommitted:"12",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"48",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"1",OwngoalTime:""},
                {Date:"23-06-2018",Team:"Sweden",Opponent:"Germany",GoalScored:"1",BallPossession:"29",Attempts:"8",OnTarget:"6",OffTarget:"1",Blocked:"1",Corners:"3",Offsides:"2",FreeKicks:"17",Saves:"4",PassAccuracy:"77",Passes:"213",DistanceCovered:"110",FoulsCommitted:"13",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"32",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"24-06-2018",Team:"England",Opponent:"Panama",GoalScored:"6",BallPossession:"58",Attempts:"12",OnTarget:"7",OffTarget:"3",Blocked:"2",Corners:"3",Offsides:"3",FreeKicks:"13",Saves:"1",PassAccuracy:"94",Passes:"593",DistanceCovered:"99",FoulsCommitted:"14",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"8",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"24-06-2018",Team:"Panama",Opponent:"England",GoalScored:"1",BallPossession:"42",Attempts:"8",OnTarget:"2",OffTarget:"5",Blocked:"1",Corners:"2",Offsides:"0",FreeKicks:"17",Saves:"1",PassAccuracy:"88",Passes:"398",DistanceCovered:"89",FoulsCommitted:"13",YellowCard:"3",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"78",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"24-06-2018",Team:"Japan",Opponent:"Senegal",GoalScored:"2",BallPossession:"54",Attempts:"7",OnTarget:"3",OffTarget:"2",Blocked:"2",Corners:"2",Offsides:"2",FreeKicks:"18",Saves:"5",PassAccuracy:"84",Passes:"449",DistanceCovered:"105",FoulsCommitted:"8",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"34",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""}
            ]
            for(let i=0; i<newdata.length; i++){
                data.push(newdata[i]);
            }
            res.sendStatus(201, "Data created");  
        } else {
            res.status(200).send(JSON.stringify(data));
        }
    }),

    // GET => Get data by host_location

    app.get(API_BASE_ARM + "/:team",(req,res)=>{
        const PAIS = req.params.Team;
        const countryDatos = data.filter(p => p.Team === PAIS || p.Opponent === PAIS);

        if(countryDatos.length > 0){
            res.status(200).send(JSON.stringify(countryDatos));
        } else {
            res.sendStatus(404, "NOT FOUND");
        }
    }),
    app.post(API_BASE_ARM + "/", validarDatos,  (req,res) => {
        let newdata = req.body;
        const equal = data.some(old => old.Team === newdata.Team && old.Opponent === newdata.Opponent && old.Date === newdata.Date);
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
    })
    // PUT => Can't update root directory
    app.put(API_BASE_ARM + "/", (req,res)=> {
        let newdata = req.body;
        res.sendStatus(405,"METHOD NOW ALLOWED");
    }),
 //PUT => Update resource
   /* app.put(API_BASE_ARM + "/:Team", (req,res) =>{
        const team = req.params.Team;
        let newdata = req.body;

    // Encuentra el índice del elemento con el ID dado en la lista de datos
    const index = data.findIndex(p => p.Team === team);

    if(index === -1){
        // El elemento con el ID dado no existe, devolver un error 404 NOT FOUND
        res.sendStatus(404, "NOT FOUND");
    } else if (!newdata || Object.keys(newdata).length === 0 || newdata.Team !== team){
        // Los datos proporcionados son inválidos o el ID no coincide, devolver un error 400 BAD REQUEST
        res.sendStatus(400, "BAD REQUEST");
    } else {
        // Reemplazar el dato existente con los nuevos datos
        data[index] = newdata;
        res.sendStatus(200, "OK");
    }
}),*/
/*app.put(API_BASE_ARM + "/:Tountry", (req,res) =>{
    const Team = req.params.Team;
    let newdata = req.body;

    const index = data.findIndex(p => p.Team === Team);

    if(index === -1){
        res.sendStatus(404, "NOT FOUND");
    } else if (!newdata || Object.keys(newdata).length === 0 || newdata.Team !== Team){
        res.sendStatus(400, "BAD REQUEST");
    } else {
        data[index] = newdata;
        res.sendStatus(200, "OK");
    }
}),*/
app.put(API_BASE +"/:country", (req, res) => {
    const pais = req.params.country;
    let data = req.body;
   
      
    //filtro para obtener los datos del pais introducido
    const countryData = data.filter(p => p.Team === pais);

    //veo si los datos introducidos no son vacios (si son validos)
    if (!newdata || Object.keys(newdata).length === 0 || newdata.Team !== pais) {
        res.sendStatus(400, "Bad Request");
    } else {
        countryData.push(newdata);
        res.sendStatus(200, "Ok");
    }
});


    // DELETE => Delete all data
    app.delete(API_BASE_ARM+ "/", (req,res) => {
    data.splice(0, data.length);
    res.status(200).send("ALL DATA DELETED");
}),

    // DELETE => Delete specific data
    
    app.delete(API_BASE_ARM+"/:name", (req,res) => {
        let name=req.params.name;
        dbRugby.remove( {"Team":name},{},(err,numRemoved)=>{
        if(err){
            res.sendStatus(500,"Internal Error");
        }else{
            if(numRemoved>=1){
                res.sendStatus(200,"Removed");
            }else{
                res.sendStatus(404,"Not found");
            }
        }
        });
    });
    // POST => Try to use not allowed method
    app.post(API_BASE_ARM + "/:Team", (req,res) =>{
        const team = req.params.Team;
        let newdata = req.body;
        res.sendStatus(405, "METHOD NOT ALLOWED");
    });
};

