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
    callbackURL: "http://localhost:3000/api/auth/google/callback",
  },
  function(accessToken, refreshToken, profile, cb) {
  	process.nextTick(function() {
		console.log('Google Access Token: ' + accessToken);
	  	console.log('Google Refresh Token: ' + refreshToken);
	  	console.log('Profile: ' + JSON.stringify.profile);
	  	userModel.getUserById(profile.email, function (err, user) {
	      	if (typeof user !== 'undefined' && user.length > 0) 
				return cb(err, user);	     	
			else {
				var userData = {
					id: profile.email,
					password: accessToken
				};
				userModel.insertUser(userData, function(error, data) {
					if (data) {
						userModel.getUserById({ googleId: profile.email }, function (err, user) {
							return cb(err, user);
						});
					}					
					else
						response.status(500).json({"Mensaje":"Error"});
				});	  
			} 
	    });
  	}); 	
  }
));

passport.use(new FacebookStrategy({
    clientID: "178427739567130",
    clientSecret: "65fc96d8e2eaa9f0f35df2b998f125fc",
    callbackURL: "http://localhost:3000/api/auth/facebook/callback",
  },
  function(accessToken, refreshToken, profile, cb) {
  	console.log('Facebook Access Token: ' + accesToken);
  	console.log('Facebook Refresh Token: ' + refreshToken);
  	console.log('Facebook Profile Data: ' + json.profile);
    userModel.getUserById({ facebookId: profile.id }, function (err, user) {
    	if (err || user) 
			return cb(err, user);	
		/*else {
			var userData = {

			}
			userModel.insertUser(userData, function(error, data) {
				if (data)
					response.status(200).json({"Mensaje":"Insertado"});
				else
					response.status(500).json({"Mensaje":"Error"});
			});	  
		} */ 	
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