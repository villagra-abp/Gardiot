var jwt = require('jsonwebtoken');
var config = require('./main'); 

var tokenDecoder = function(request, response, next){
var token = request.headers.authorization.slice(4); //Recorto el JWT(espacio) del POSTMAN
	jwt.verify(token, config.secret, function(err, decoded) {
		if (err)
			next(err, null);
		else
			next(null, decoded);
	});	
}

module.exports = tokenDecoder;