
var signUp = require('../Views/User');
var movieEdit = require('../Services/UserMovie');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/signUp', signUp.signUp);
router.put('/rateMovie', movieEdit.rateMovie);
router.put('/deleteMovie', movieEdit.setMovieDeleted);

module.exports = router;