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
//var passportJWT = require('passport-jwt'); //JWT Strategy
//var extractJwt = passportJWT.ExtractJwt;
//var strategyJwt = passportJWT.Strategy;

var config = require('./config/main');

/*var userModel = require('./models/user');

var jwtOptions = {}
jwtOptions.jwtFromRequest = extractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = config.secret;

var JWTstrategy = new strategyJwt(jwtOptions, function(payload, next) {
	console.log('Payload', payload);
	console.log('PAYLOAD ID: ' + payload.id);
	userModel.getUserById(payload.id, function(err, user) {
		if (err) 
			next(err, false);		
		else if (user) 
			next(null, user);	
		else 
			done(null, false);		
	});

});

passport.use(JWTstrategy);*/


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
app.use('/api', require('./routes/jardinRoutes'));
app.use('/api', require('./routes/userRoutes'));

//Start server
app.listen(config.port, function () {
  console.log('API running on port ' + config.port);
});
