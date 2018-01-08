var express = require('express');
var router = express.Router();
module.exports = router.all('*', function (req, res, next) {
	if (req.method == 'GET' || req.path == '/user' || req.path == '/authenticate' || req.path == '/login' || req.path == '/logout' || req.path == '/register')
		next();
	else
		res.status(501).json({"Mensaje":"Ruta no disponible por el momento"});
});