var express = require('express');
var router = express.Router();

var toolModel = require('../models/tool');


router.get('/tool', function(request, response) {
	toolModel.getTool (function(error, data) { //Asocia la llamada con la funcion del modelo
		response.status(200).json(data);
	});
});

router.use('/', require('../functions/BLOCK')); //Bloquea las siguientes rutas


router.get('/tool/:id', function(request, response) {
	var id = request.params.id;
	toolModel.getToolById(id, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.post('/tool', function(request, response) {
	var toolData = {
		name: request.body.name,
		photo: request.body.photo,
	};
	

	toolModel.insertTool(toolData, function(error, data) {
		if (data) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.put('/tool', function(request, response) {
	var toolData = {
		id: request.body.id,
		name: request.body.name,
		photo: request.body.photo,
	};
	toolModel.updateTool(toolData,function(error, data) {
		if (data && data.mensaje) {
			response.status(200).json(data);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.delete('/tool/:id', function(request, response) {
	var id = request.params.id;
	toolModel.deleteTool(id, function(error, data) {
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
