
var movieController = require('../Views/Movie');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/signUp', movieController.getMovie);

module.exports = router;