var passport = require('passport');
var jwtStrategy = require('passport-jwt').Strategy;
var jwtExtract = require('passport-jwt').ExtractJwt;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var jwt = require('jsonwebtoken');

var inactiveTokenModel = require('../models/inactiveToken');
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
	  	var user;
	  	var token = '';
	  	userModel.getUserById(parsed.emails[0].value, function (err, user) {
	      	if (typeof user[0] !== 'undefined') { //Si encontramos al usuario en la BD
	      		user = JSON.parse(JSON.stringify(user[0], null, 4));
	      		if (user.access.search("google")==-1) { //Si no tiene asociado el login por OAuth de Google lo anyadimos
	      			var userData = {
						googleId: parsed.id,
						access: user.access + ',google',
						oldId: parsed.emails[0].value
					};
	      			userModel.updateUser(userData, function(err, data) {
	      				if (data) {
  							if (!request.user) { //Si el usuario no se ha logeado antes, se crea un JWT
								token = jwt.sign({}, config.secret, {
									expiresIn: '6h',
									audience: "gardiot.ovh",
									subject: user.id
								});
								user.token = token;
					   		}
					    	return done(err, user);
	      				}
						else return done (err, false);
	      			});
	      		}
	      		else if (user.googleId == parsed.id) { //Si el usuario existe y ya tiene asociado el login de Google en BD
	      			if (!request.user) { //Si el usuario no se ha logeado antes, se crea un JWT
						token = jwt.sign({}, config.secret, {
							expiresIn: '6h',
							audience: "gardiot.ovh",
							subject: user.id
						});
						user.token = token;
			   		}
			    	return done(err, user);
	      		}
	      	}

			else { //Si no encontramos al usuario en la BD, lo creamos
				var userData = {
					id: parsed.emails[0].value,
					googleId: parsed.id,
					name: parsed.name.givenName,
					lastName: parsed.name.familyName,
					//photo: parsed.image.url,
					access: 'google',
					photo: parsed.photos[0].value
				};
				userModel.insertUser(userData, function(error, data) {
					if (data == 1) {
						if (!request.user) { //Si el usuario no se ha logeado antes, se crea un JWT
							token = jwt.sign({}, config.secret, {
								expiresIn: '6h',
								audience: "gardiot.ovh",
								subject: userData.id
							});
							user.token = token;
				   		}
				   		return done(err, user);
					}
					else  return done(err, false);
				});
			}
	    });
  	});
  }
));

passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    profileFields: ['id', 'displayName', 'email'],
    enableProof: true,
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
  	process.nextTick(function() {
	  	var parsed = JSON.parse(JSON.stringify(profile, null, 4));
	  	var user;
	  	var token = '';
	  	userModel.getUserById(parsed.emails[0].value, function (err, user) {
	      	if (typeof user[0] !== 'undefined') { //Si encontramos al usuario en la BD
	      		user = JSON.parse(JSON.stringify(user[0], null, 4));
	      		if (user.access.search("facebook")==-1) { //Si no tiene asociado el login por OAuth de facebook lo anyadimos
	      			var userData = {
						facebookId: parsed.id,
						access: user.access + ',facebook',
						oldId: parsed.emails[0].value
					};
	      			userModel.updateUser(userData, function(err, data) {
	      				if (data) {
  							if (!request.user) { //Si el usuario no se ha logeado antes, se crea un JWT
								token = jwt.sign({}, config.secret, {
									expiresIn: '6h',
									audience: "gardiot.ovh",
									subject: user.id
								});
								user.token = token;
					   		}
					    	return done(err, user);
	      				}
						else return done (err, false);
	      			});
	      		}
	      		else if (user.facebookId == parsed.id) { //Si el usuario existe y ya tiene asociado el login de facebook en BD
	      			if (!request.user) { //Si el usuario no se ha logeado antes, se crea un JWT
						token = jwt.sign({}, config.secret, {
							expiresIn: '6h',
							audience: "gardiot.ovh",
							subject: user.id
						});
						user.token = token;
			   		}
			    	return done(err, user);
	      		}
	      	}

			else { //Si no encontramos al usuario en la BD, lo creamos
				var userData = {
					id: parsed.emails[0].value,
					facebookId: parsed.id,
					name: parsed.displayName,
					access: 'facebook'
					//photo: parsed.photos[0].value
				};
				userModel.insertUser(userData, function(error, data) {
					if (data == 1) {
						if (!request.user) { //Si el usuario no se ha logeado antes, se crea un JWT
							token = jwt.sign({}, config.secret, {
								expiresIn: '6h',
								audience: "gardiot.ovh",
								subject: userData.id
							});
							user.token = token;
				   		}
				   		return done(err, user);
					}
					else  return done(err, false);
				});
			}
	    });
  	});
  }
));

var jwtOptions = {}
jwtOptions.jwtFromRequest = jwtExtract.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = config.secret;
jwtOptions.audience = "gardiot.ovh";
jwtOptions.algorithms = "HS256";

var JWTstrategy = new jwtStrategy(jwtOptions, function(payload, next) {
	userModel.getUserById(payload.sub, function(err, user) {
		if (err)
			next(err, false);
		else if (typeof user[0] !== 'undefined') {
			userModel.registerConnection(user[0].id, function(error, up) {
				if (error)
					console.log(error);
				next(null, user[0]);
			});			
		}
		else
			next(null, false);
	});
});

passport.use(JWTstrategy);
