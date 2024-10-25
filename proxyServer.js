// ProxyServer

var express = require("express");
var app = express();
var fetch = require("node-fetch");
var cors = require("cors");

app.use(cors());

app.get("/", async (req, res) => {
    const urls = [
        "https://assets.deadlock-api.com/v2/heroes?language=english",
        "https://assets.deadlock-api.com/v2/items?language=english"
    ];

    const responses = await Promise.all(urls.map(url => fetch(url)));

    const data = await Promise.all(responses.map(response => response.json()));

    res.json(data);

}) 

app.listen(3000, () => {
    console.log("Started and listenting to port 3000");
    
})