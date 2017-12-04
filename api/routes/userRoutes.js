var express = require('express');
var router = express.Router();

var userModel = require('../models/user');

router.get('/user', function(request, response) {
	userModel.getUser (function(error, data) { //Asocia la llamada con la funcion del modelo
		response.status(200).json(data);
	});
});

router.get('/user/:id', function(request, response) {
	console.log(request.params);
	var id = request.params.id;
	userModel.getUserById(id, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});


router.post('/user', function(request, response) {
	var userData = {
		id: request.body.id,
		password: request.body.contrasenya,
		name: request.body.name,
		birthDate: request.body.birthDate,
		photo: request.body.photo,
		active: 1, //Activos por defecto
		city: request.body.city,
		plan: request.body.plan,
	};
	userModel.insertUser(userData, function(error, data) {
		if (data) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.put('/user', function(request, response) {
	var userData = {
		id: request.body.id,
		password: request.body.contrasenya,
		name: request.body.name,
		birthDate: request.body.birthDate,
		photo: request.body.photo,
		city: request.body.city,
		plan: request.body.plan
	};
	userModel.updateUser(userData, function(error, data) {
		if (data && data.mensaje) {
			response.status(200).json(data);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.delete('/user/:id', function(request, response) {
	var id = request.params.id;
	userModel.deleteUser(id, function(error, data) {
		if (data == 1) {
			response.status(200).json({"Mensaje":"Borrado"});
		}
		else if (data == 0) {
			response.status(404).json({"Mensaje":"No existe"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});



module.exports = router;
