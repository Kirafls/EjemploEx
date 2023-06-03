var express = require('express');
var app = express();
var server = require('http').Server(app);
const axios = require('axios');
const router = require("./routes/routes.js");

app.get('/', function(req, res) {
    res.status(200).send("Servidor corriendo ");
  });

app.get('/api',router);  

server.listen(3000, function() {
    console.log("Servidor corriendo en http://localhost:3000");
  });

