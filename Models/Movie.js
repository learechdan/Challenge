var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var MovieSchema = new mongoose.Schema({
    title: String,
    picture: String, // this will have to call the cloud (i usually call firebase) to bring the picture. By doing so, the movie will have also a uid
    uid: String, // identifier linked to firebase
    sorting: String, // check enumerator
    genre: {
        type: String,
        enum: ['Comedy', 'Romance', 'Drama']
    },
    generalRating: Number // might be used to calculate avgRating and help Sorting for later
});

MovieSchema.pre('save', function (next) {
    console.log("pre save");
    // get the current date
    var currentDate = new Date() + this.timezone * 3600000;

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;
    next();
});

var Movie = mongoose.model('Movies', MovieSchema, 'Movies');

module.exports = Movie;
