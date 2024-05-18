import dataStore from "nedb";
import express from "express";
import bodyParser from "body-parser";

import {loadBackendALA} from "./back/v1/trimestralpib-stats/index-ALA.js";
import {loadBackendALA_v2} from "./back/v2/trimestralpib-stats/index-ALA.js";
import {loadBackendAAF} from "./back/v1/economicfreedom-stats/index-AAF.js";
import {loadBackendAAF_v2} from "./back/v2/economicfreedom-stats/index-AAF.js";
import {loadBackendARM} from "./back/v1/manofthematch/index-ARM.js";
import {loadBackendARM_v2} from "./back/v2/manofthematch/index-ARM.js";

import {handler} from "./front/build/handler.js";
import cors from "cors";
import request from "request";

let db_ARM = new dataStore();
let db_ALA = new dataStore();
let db_AAF = new dataStore();

let db_AAF_v2 = new dataStore();
let db_ALA_v2 = new dataStore();
let db_ARM_v2 = new dataStore();


let app = express();

app.use(cors());

// Proxy Adri
var paths = "/proxyAdri";
var apiServerHost = "https://restcountries.com/v3.1/all";

app.use(paths, function(req,res){
    var url = apiServerHost + req.url;
    req.pipe(request(url)).pipe(res);
});
//proxy arm

app.use("/proxyARM", function (req, res) {
    const url = 'https://api.api-ninjas.com/v1/holidays?country=AU&year=2018';
    const options = {
        url: url,
        headers: {
            "X-Api-Key": "Qr5V7x10UceVt+16gV6VWQ==Sducj1ZGameniOdvf"
        }
    };
    request(options, (error, response, body) => {
        if (error) {
            console.error(error);
            res.status(500).send(error);
        } else {
            console.log(response.statusCode);
            console.log(body);
            res.send(body);
        }
    });
});

// Proxy Ahmed


app.use("/proxyAAF", function(req, res) {
    var url = 'https://inflation-by-api-ninjas.p.rapidapi.com/v1/inflation'; // URL de la API de baloncesto
    console.log("Proxying to: " + url);
    
    request({
        url: url,
        headers: {
            'X-RapidAPI-Key': '4e1a27c673msh81b6527001dad5dp145d49jsne302105ebb4f',
            'X-RapidAPI-Host': 'inflation-by-api-ninjas.p.rapidapi.com'
        }
    }).pipe(res);
});

app.use(bodyParser.json());


app.use("/proxyAhmed", function(req, res) {
    var url = "https://sos2324-17.appspot.com/api/v1/economicfreedom_stats" + req.url;
    console.log("Proxying to: " + url);
    req.pipe(request(url)).pipe(res);
});


const PORT = (process.env.PORT || 20000);

//api
loadBackendALA(app, db_ALA);
loadBackendALA_v2(app, db_ALA_v2);

loadBackendARM_v2(app, db_ARM_v2);
loadBackendARM(app, db_ARM)

loadBackendAAF(app, db_AAF);

loadBackendAAF_v2(app, db_AAF_v2);


app.use(handler);

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
});

//static

app.use("/", express.static("./public"));



