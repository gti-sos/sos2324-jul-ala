let dataStore = require("nedb");
let express = require("express");
let bodyParser = require("body-parser");
let API_ALA = require("./api/api-ALA")
let API_AAF = require("./api/api-AAF")
let API_ARM = require("./api/api-ARM")

let db_ARM = new dataStore();
let db_ALA = new dataStore();
const ahmed_data = require('./index-AAF.js')

let app = express();
app.use(bodyParser.json());

const PORT = (process.env.PORT || 20000);

//api
API_ALA(app, db_ALA);
API_ARM(app, db_ARM);
API_AAF(app);


app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
});

//static

app.use("/", express.static("./public"));



