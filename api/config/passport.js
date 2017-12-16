var passport = require('passport');
var jwtStrategy = require('passport-jwt').Strategy;
var jwtExtract = require('passport-jwt').ExtractJwt;
var GoogleStrategy = require('passport-google-oauth20').Strategy;
//var localStrategy = require('passport-local'); //CAMBIAR TODO A CONST
var FacebookStrategy = require('passport-facebook').Strategy;

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


passport.use(new GoogleStrategy({
    clientID: "122766485062-o9tfjesnk22hfe371bi8h1juv9j2t8uo.apps.googleusercontent.com",
    clientSecret: "NmIayflE5RizlVJFyOm_Y-wG",
    callbackURL: "http://www.example.com/auth/google/callback",
  },
  function(accessToken, refreshToken, profile, cb) {
  	userModel.getUserById({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.use(new FacebookStrategy({
    clientID: "178427739567130",
    clientSecret: "65fc96d8e2eaa9f0f35df2b998f125fc",
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: 'email' //Se pueden anyadir mas con [,]
  },
  function(accessToken, refreshToken, profile, cb) {
    userModel.getUserById({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

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