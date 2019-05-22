/*
DeepMon-Core/Server - server.js
Alex Carter @ 7:03PM 5/21/2019
*/

//Require Libs
const express = require('express');
const bodyParser = require('body-parser');
const Logger = require("disnode-logger");
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');

//Load local classes and config
const config = require('./config');
const db     = require('./src/db');
//Create the express app
const app = express();

// Connect to Database
db.Connect(config.db)

// Enable Express Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Base Status Paths
app.get('/', function (req, res) {
    Logger.Info("Server", "Route: /", "Sending Health Status.");
    return res.send('Online.');
})

app.get('/status', function (req, res) {
    Logger.Info("Server", "Route: /status ", "Sending Health Status.");
    return res.send('Online.');
})


//Start the server
app.listen(config.port || 80, () => {
    Logger.Success("DeepMon-Server", "Listen", "Server Listening on port: " + config.port);
});