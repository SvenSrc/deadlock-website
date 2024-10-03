// ProxyServer

var express = require("express");
var app = express();
var fetch = require("node-fetch");
var cors = require("cors");

app.use(cors());

app.get("/", async (req, res) => {
    var response = await fetch("https://assets.deadlock-api.com/v1/heroes?language=english")
    res.json(await response.json())
})

app.listen(3000, () => {
    console.log("Started and listenting to port 3000");
    
})