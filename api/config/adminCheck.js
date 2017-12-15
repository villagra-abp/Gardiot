//var jwt = require('jsonwebtoken');
//var jwtExtract = require('passport-jwt').ExtractJwt;
//var config = require('../config/main'); 

/*var requireAdmin = function(request, response, next) { //Anyadir en las llamadas para check de admin en token	
	jwt.verify(jwtExtract.fromAuthHeaderWithScheme('jwt'), config.secret, function(err, decoded) {
		if (err)
			throw err;
		else {
			if (!decoded.admin) 
				response.status(403).json({"Mensaje":"Permiso denegado"});
			else
				next();
		}
	});
}*/

var requireAdmin = function (request, response, next) {
	if (request.user.admin == 0)
		response.status(403).json({"Mensaje":"Permiso denegado"});
	else
		next();
}

module.exports = requireAdmin;