var inactiveTokenModel = require('../models/inactiveToken');

var tokenCheck = function (request, response, next) {
	var token = request.headers.authorization;
	inactiveTokenModel.getInactiveTokenByToken(token, function (error, data) {
		if (error) response.status(500).json({"Mensaje":"Error interno comprobando el token"});
		else if (typeof data[0] === 'undefined') 
			next();
		else response.status(401).json({"Mensaje":"Token no válido"});
	});
}

module.exports = tokenCheck;


