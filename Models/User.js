var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var UserSchema = new Schema({
    username: String,
    password: String,
    movies: [{ title: { type: Schema.Types.ObjectId, ref: "movies" }, rating: Number }]
});

UserSchema.pre('save', function (next) {
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

var User = mongoose.model('users', UserSchema, 'users');

module.exports = {
    User: User
};
