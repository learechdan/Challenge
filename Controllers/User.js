
var signUp = require('../Views/User');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/', signUp.signUp);

module.exports = router;