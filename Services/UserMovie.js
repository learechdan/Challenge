const User = require('../Models/User');
const Movie = require('../Models/Movie');

rateMovie = async function (req, res) {
    var user = req.body.user;
    var movieId = req.body.movieId;
    var rating = req.body.rating;
    if (rating < 1 || rating > 5) return res.status(401).send("rating out of bounds");
    var newRating = { title: movieId, rating: rating };
    await User.updateOne({ _id: user }, { movies: { $pull: { title: movieId }, $push: newRating } }, function (error, updated) {
        if (error) {
            console.log("error: ", error);
            res.status(500).send("error");
        }
    });
    res.status(200).send("movie successfully rated");
}

setMovieDeleted = async function (req, res) {
    var user = req.body.user;
    var movieId = req.body.movieId;
    await User.updateOne({ _id: user, movies: { title: movieId } }, { movies: { $set: { deleted: true } } }, function (error, updated) {
        if (error) {
            console.log("error: ", error);
            res.status(500).send("error");
        }
    });
    res.status(200).send("movie successfully deleted");
}

exports.rateMovie = this.rateMovie;
exports.setMovieDeleted = this.setMovieDeleted;