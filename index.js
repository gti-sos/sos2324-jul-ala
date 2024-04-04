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

let db_ARM = new dataStore();
let db_ALA = new dataStore();
let db_AAF = new dataStore();

let db_AAF_v2 = new dataStore();
let db_ALA_v2 = new dataStore();
let db_ARM_v2 = new dataStore();


let app = express();

app.use(cors());

app.use(bodyParser.json());


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



