const User = require('../Models/User');
const Movie = require('../Models/Movie');

rateMovie = async function (user, movieId, rate) {
    var userObject = await User.findOne({_id: user});
    var movieRated = Array.contains(userObject.movies); 
    User.updateOne({ _id: user, movie: { title: movieId } }, { $set: {} })
}
setMovieDeleted = async function (user, movieId) {

}