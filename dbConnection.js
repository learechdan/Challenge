
var mongoose = require("mongoose");


async function connect(mongoose) {
  mongoose.Promise = global.Promise;
  mongoose.set('useUnifiedTopology', true);
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  var log = "";
  var connectionString = "mongodb://mongo:27017/MovieMania_db";
  try {
    await mongoose.connect(connectionString);
    log = 'Database connected successfully';
  } catch (error) {
    console.log('error', error);
    log = 'Database connection error';
  }
  return log;
}

connect(mongoose).then(async log => {
  console.log("---cnx---", log);
}).catch(log => {
  console.log("error cnx", log);
});
