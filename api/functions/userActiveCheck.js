var checkActive = function (request, response, next) {
	if (request.user.active == 0)
		response.status(403).json({"Mensaje":"Cuenta no activa"});
	else
		next();
}

module.exports = checkActive;