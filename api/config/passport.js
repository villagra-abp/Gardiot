var passport = require('passport');
var jwtStrategy = require('passport-jwt').Strategy;
var jwtExtract = require('passport-jwt').ExtractJwt;
//var localStrategy = require('passport-local'); //CAMBIAR TODO A CONST

var userModel = require('../models/user');
var config = require('./main'); 

/*const localOptions = {usernameField: 'email'};

const localLogin = new localStrategy(localOptions, function(email, password, done) {
	userModel.getUserById(email, function(err, user) {
		if (err) {
			return done(err);
		}
		if (!user) {
			return done(null, false, {error: 'Your login details could not be verified.'});
		}
		userModel.checkPassword(password, email, function(err, isMatch) {
			if (err) {
				return done(err);
			}
			if (!isMatch) {
				return done(null, false, {error: 'Your login details could not be verified.'});
			}
			return done(null, user);
		});
	});
}); */


var jwtOptions = {}
jwtOptions.jwtFromRequest = jwtExtract.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = config.secret;
jwtOptions.audience = "gardiot.ovh";
jwtOptions.algorithms = "HS256";

var JWTstrategy = new jwtStrategy(jwtOptions, function(payload, next) {
	console.log('Payload', payload);
	userModel.getUserById(payload.id, function(err, user) {
		if (err) 
			next(err, false);		
		else if (user) 
			next(null, user[0]);	
		else 
			next(null, false);		
	});

});

passport.use(JWTstrategy);
//passport.use(localLogin);