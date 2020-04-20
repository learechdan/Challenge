const User = require('../Models/User');
var UserMovie_Service = require('../Services/UserMovie');

setUser = function (body, user) {
    user.username = body.username;
    user.password = body.password;
}

signUp = async function (req, user) {
    try {
        console.log("calling sign up");
        // Check unique username
        // Create user in database
        if (!req.body.username || !req.body.password) {
            var error = { status: 401, message: "Missing information" };
            return error;
        }
        // Mongo call
        // User.findOne({ username: req.body.username }, function (error, user) {
        //     if (error) {
        //         console.log(error);
        //         error = { status: 401, message: "Missing information" };
        //         return error;
        //     }
        //     else if (user) {
        //         var error = { status: 401, message: "User already exists" };
        //         return error;
        //     }
        // })
        var user = new User();
        await setUser(req.body, user);
        await user.save(); // saves user in mongo
        return res.status(200).send(user);
    } catch (error) {
        return { status: 500, message: error };
    }
}


exports.signUp = signUp;