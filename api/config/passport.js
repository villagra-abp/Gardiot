var passport = require('passport');
var jwtStrategy = require('passport-jwt').Strategy;
var jwtExtract = require('passport-jwt').ExtractJwt;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var jwt = require('jsonwebtoken');

var userModel = require('../models/user');
var config = require('./main'); 
var configAuth = require('./auth');


passport.use(new GoogleStrategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL,
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
  	process.nextTick(function() {
	  	var parsed = JSON.parse(JSON.stringify(profile, null, 4));
	  	console.log(parsed);
	  	var user;
	  	userModel.getUserById(parsed.emails[0].value, function (err, user) {
	      	if (typeof user !== 'undefined' && user.length > 0) {
	      		if (user.access.search("google")!=-1) {
	      			var userData = {
						googleId: parsed.id,
						access: user.access + ',google'
					};
	      			userModel.updateUser(parsed.emails[0].value, function(err, data) {
	      				if (data == 'undefined')
							response.status(500).json({"Mensaje":"Error"});							
	      			});
	      		}
	      	} 							     	
			else {
				var userData = {
					id: parsed.emails[0].value,
					googleId: parsed.id,
					name: parsed.displayName,
					access: 'google'
					//photo: parsed.photos[0].value
				};
				userModel.insertUser(userData, function(error, data) {
					if (data) 
						userModel.getUserById(parsed.emails[0].value, function (err, user) {});										
					else 
						response.status(500).json({"Mensaje":"Error"});
				});	  
			} 
	    });
	    var token;
	    if (!request.user) { 
			token = jwt.sign({}, config.secret, {
				expiresIn: '6h',
				audience: "gardiot.ovh",
				subject: user.id
			});	    	
	    }
	    return done(err, user, token);
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