var jwt = require('jsonwebtoken');
var jwtExtract = require('passport-jwt').ExtractJwt;
var config = require('./main'); 

var tokenDecoder = function(request, response, next){
	jwt.verify(jwtExtract.fromAuthHeaderAsBearerToken(), config.secret, function(err, decoded) {
		if (err)
			next(err, null);
		else
			next(null, decoded);
	});	
}

module.exports = tokenDecoder;