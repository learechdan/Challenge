const Movie = require('../Models/Movie');
// var UserMovie_Service = require('../Services/UserMovie');

getMovie = async function (req, res){ 
    // this will be applied for 1 or many movies
    var query = req.params.movieTitle ? {title: req.params.movieTitle.toLowerCase()} : {};
    var movies = await Movie.find(query); // mongodb search is case sensitive, so I have to search further in mongodb documentation about it, or we make sure that the titles are in lowercase 
    return movies;
}

exports.getMovie = getMovie; 