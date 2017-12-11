var jwt = require('jsonwebtoken');
var config = require('../config/main'); 

var requireAdmin = function(request, response, next) { //Anyadir en las llamadas para check de admin en token
	var token = request.headers.authorization.slice(4);
	jwt.verify(token, config.secret, function(err, decoded) {
		if (err)
			throw err;
		else {
			if (!decoded.admin) 
				response.status(403).json({"Mensaje":"Permiso denegado"});
			else
				next();
		}
	});
}

module.exports = requireAdmin;