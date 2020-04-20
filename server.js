var app = require('./app');
var CONF = require('./config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': true }));

var environment = CONF.config_localhost;

var server = app.listen(environment.port, function () {
  console.log('Express server listening on port:' + environment.port);
});