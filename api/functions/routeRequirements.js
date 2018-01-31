var requireAdmin = require('./adminCheck');
var requireActive = require('./userActiveCheck');
var requireActiveToken = require('./tokenCheck');

var routeRequirements = function (request, response, next) {
	requireAdmin(request, response, next);
	requireActive(request, response, next);
	requireActiveToken(request, response, next);
	//if (!response.headersSent)
		//next();
}

module.exports = routeRequirements;