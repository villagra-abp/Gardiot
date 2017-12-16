var passport = require('passport');
var jwtStrategy = require('passport-jwt').Strategy;
var jwtExtract = require('passport-jwt').ExtractJwt;
var GoogleStrategy = require('passport-google-oauth20').Strategy;
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


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback",
  },
  function(accessToken, refreshToken, profile, cb) {
  	userModel.getUserById({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
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