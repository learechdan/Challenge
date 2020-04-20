var express = require('express');

var app = express();
app.use(express.json());
// let router = app;
// var db = require('./dbConnection');
var bodyParser = require('body-parser');
// var CONF = require('./config');
// var User = require("./models/User");
var v1 = express.Router();


// var SignUp = require('./Controllers/User/SignUp');
var UserController = require('./Controllers/User');
// var MovieController = require('./Controllers/Movie');

v1.use(function (req, res, next) {
    req.header("Access-Control-Allow-Origin", "*");
    next();
});

v1.use('/signUp', UserController);

app.use('/', v1);

// v1.use('/movies', MovieControlller);


app.use((request, response, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    response.status(404).send({ 'error': "Page not found" });
});

module.exports = app;
