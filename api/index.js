//Dependencies
var express = require('express');
var cors = require('cors'); //CORS standard
var bodyParser = require('body-parser'); //Parsing body data handled
var mariadb = require('mariasql'); //MariaDB communication
var helmet = require('helmet'); //Security
var morgan = require('morgan'); //POST Body console logger
var passport = require('passport'); //Authentication strategies
var jwt = require('jsonwebtoken'); //Session tokens
var _ = require('lodash'); //_ functionality


var config = require('./config/main');

//Express init and load modules
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(passport.initialize());
require('./config/passport'); //REVISAR

//Routes
app.use('/api', require('./routes/userRoutes'));

//Start server
app.listen(config.port, function () {
  console.log('API running on port ' + config.port);
});
