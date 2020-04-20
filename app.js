var express = require('express');

var app = express();
app.use(express.json());
// var db = require('./dbConnection');
var bodyParser = require('body-parser');
var v1 = express.Router();


var UserController = require('./Controllers/User');
var MovieController = require('./Controllers/Movie');

v1.use(function (req, res, next) {
    req.header("Access-Control-Allow-Origin", "*");
    next();
});

v1.use('/user', UserController);
v1.use('/movies', MovieController);

app.use('/', v1);

app.use((request, response, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    response.status(404).send({ 'error': "Page not found" });
});

module.exports = app;
