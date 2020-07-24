const express = require('express')
const mysql = require('mysql')
const info = require("./info.json")
const bodyParser = require("body-parser");

const app = express()

//Set ejs come view engine
app.set("view engine", "ejs");

//Definizione della posizione del file index.ejs
app.set("views", "./views");
//Definizione cartella contenente i file esterni (css, scripts, ecc)
app.use(express.static('public'));

//Use body-parser
app.use(bodyParser.urlencoded({
    extended: false
}));

//Render index.ejs
app.get("/", (req, res) => {
    res.render("index", {"info":info})
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
