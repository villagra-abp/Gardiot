var inactiveTokenModel = require('../models/inactiveToken');

var routeRequirements = function (request, response, next) {
	if (request.hostname == 'gardiot.ovh' && request.path.indexOf('admin')!=-1 && request.user.admin == 0)
		response.status(403).json({"Mensaje":"Permiso denegado"});
	else if (request.hostname =='gardiot.ovh' && request.user.active == 0)
		response.status(403).json({"Mensaje":"Cuenta no activa"});
	else if (request.user && request.user.dateDelete)
		response.status(403).json({"Mensaje":"Cuenta dada de baja"});
	else {
		var token = request.headers['authorization'];
		token = token.slice(7);
		inactiveTokenModel.getInactiveTokenByToken(token, function (error, data) {
			if (error) response.status(500).json({"Mensaje":"Error interno comprobando el token"});
			else if (typeof data[0] === 'undefined') 
				next();
			else response.status(401).json({"Mensaje":"Token no válido"});
		});
	}

}

module.exports = routeRequirements;