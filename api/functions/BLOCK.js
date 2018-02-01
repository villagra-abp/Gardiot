var express = require('express');
var router = express.Router();

router.all('*', function (req, res, next) {
	console.log(req.params);
	if (req.method == 'OPTIONS')
		next();
	else if (req.method == 'GET' && !req.params) //GETS ALL genericos
		next();
	else if (req.path == '/user' || req.path == '/authenticate' || req.path == '/login' || req.path == '/logout' || req.path == '/register' || req.path == '/isAdmin' || req.path == '/users' || req.path == '/auth/google' || req.path == '/auth/google/callback') //Rutas de usuario sin parametros
		next();
	else if ((req.method == 'GET' || req.method == 'PUT' || req.method == 'PATCH' || req.method == 'DELETE') && req.path.search("user")!=-1 && req.params) //Rutas de admin con parametros
		next();
	else
		res.status(501).json({"Mensaje":"Ruta no disponible por el momento"});
});

module.exports = router;