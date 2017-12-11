var express = require('express');
var router = express.Router();

var usuariosModel = require('../models/usuarios');

router.get('/usuarios', function(request, response) {
	usuariosModel.getUsuarios (function(error, data) { //Asocia la llamada con la funcion del modelo
		response.status(200).json(data);
	});
});

router.get('/usuarios', function(request, response) {
	var id = request.query.id;
	usuariosModel.getUsuariosById(id, function(error, datos) {
		if (typeof data !== 'undefined' && datos.length > 0) {
			response.status(200).json(datos);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.post('/usuarios', function(request, response) {
	var usuariosData = {
		idUsuarios: null, 
		contrasenya: request.body.contrasenya,
		nombre: request.body.nombre,
		apellidos: request.body.apellidos,
	};
	usuariosModel.insertUsuarios(usuariosData, function(error, datos) {
		if (datos) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.put('/usuarios', function(request, response) {
	var usuariosData = {
		idUsuarios: null, 
		contrasenya: request.body.contrasenya,
		nombre: request.body.nombre,
		apellidos: request.body.apellidos,
	};
	usuariosModel.updateUsuarios(usuariosData, function(error, datos) {
		if (datos && datos.mensaje) {
			response.status(200).json(datos);			
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.delete('usuarios', function(request, response) {
	var id = request.query.id;
	usuariosModel.deleteUsuarios(id, function(error, datos) {
		if (datos && datos.mensaje === "Borrado") {
			response.status(200).json(datos);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

module.exports = router;