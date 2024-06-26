import dataStore from "nedb";
import express from "express";
import bodyParser from "body-parser";

import {loadBackendALA} from "./back/v1/trimestralpib-stats/index-ALA.js";
import {loadBackendALA_v2} from "./back/v2/trimestralpib-stats/index-ALA.js";


import {handler} from "./front/build/handler.js";
import cors from "cors";
import request from "request";


let db_ALA = new dataStore();


let db_ALA_v2 = new dataStore();



let app = express();

app.use(cors());

// Proxy Adri
var paths = "/proxyAdri";
var apiServerHost = "https://restcountries.com/v3.1/all";

app.use(paths, function(req,res){
    var url = apiServerHost + req.url;
    req.pipe(request(url)).pipe(res);
});


app.use(bodyParser.json());




const PORT = (process.env.PORT || 20000);

//api
loadBackendALA(app, db_ALA);
loadBackendALA_v2(app, db_ALA_v2);



app.use(handler);

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
});

//static

app.use("/", express.static("./public"));



