import dataStore from "nedb";
import express from "express";
import bodyParser from "body-parser";

import {loadBackendALA} from "./back/v1/trimestralpib-stats/index-ALA.js";
import {loadBackendAAF} from "./back/v1/economicfreedom-stats/index-AAF.js";
import {loadBackendARM} from "./back/v1/manofthematch/index-ARM.js";

import {handler} from "./front/build/handler.js";

let db_ARM = new dataStore();
let db_ALA = new dataStore();
let db_AAF = new dataStore();


let app = express();
app.use(bodyParser.json());


const PORT = (process.env.PORT || 20000);

//api
loadBackendALA(app, db_ALA);
loadBackendARM(app, db_ARM);
loadBackendAAF(app, db_AAF);

app.use(handler);

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
});

//static

app.use("/", express.static("./public"));



