var inactiveTokenModel = require('../models/inactiveToken');

var routeRequirements = function (request, response, next) {	
	if (request.user.admin == 1 && request.path.indexOf('admin') == -1 && !allow(request.path, request.method))
		response.status(403).json({"Mensaje":"Un administrador no puede ejecutar esta acción"});	
	else if (request.path.indexOf('admin')!=-1 &&  request.user.admin == 0)
		response.status(403).json({"Mensaje":"Permiso denegado"});
	else if (request.user.active == 0)
		response.status(403).json({"Mensaje":"Cuenta no activa"});
	else if (request.user.dateDelete)
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

function allow (path, method){
	for (var value in adminAllowed) 
			if (path.indexOf(adminAllowed[value].path)!= -1 && method.indexOf(adminAllowed[value].method)!= -1)
				return true;
	return false;				
}

var adminAllowed = [];
adminAllowed.push({method: 'GET', path: 'Admin'});
adminAllowed.push({method: 'GET', path: 'user'});
adminAllowed.push({method: 'PUT', path: 'user'});
adminAllowed.push({method: 'GET', path: 'find'});
adminAllowed.push({method: 'GET', path: 'treatmentPlant'});
adminAllowed.push({method: 'GET', path: 'treatment'});
adminAllowed.push({method: 'GET', path: 'product'});
adminAllowed.push({method: 'GET', path: 'logout'});


module.exports = routeRequirements;