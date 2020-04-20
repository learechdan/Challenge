const Movie = require('../Models/Movie');
// var UserMovie_Service = require('../Services/UserMovie');

getMovie = async function (req, res){ 
    var movies = await Movie.find({});
    return movies;
}

exports.getMovie = getMovie; 