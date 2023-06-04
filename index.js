var express = require('express');
var app = express();
var server = require('http').Server(app);
const PORT=8080;
const axios = require('axios');
const router = require("./routes/routes.js");

app.get('/', function(req, res) {
    res.status(200).send("Servidor corriendo ");
  });

app.get('/api',router);
app.get('/nasa',router);
app.get('/simpson',router);

server.listen(PORT, function() {
    console.log("Servidor corriendo en http://localhost:"+PORT);
  });