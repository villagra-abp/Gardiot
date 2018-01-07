var express = require('express');
var router = express.Router();
module.exports = router.all('*', function (req, res, next) {
	if (req.method === 'GET' || req.baseUrl === '/user' || req.baseUrl === '/authenticate' || req.baseUrl === '/login' || req.baseUrl === '/logout')
		return next();
	else
		res.status(501).json({"Mensaje":"Ruta no disponible por el momento"});
});