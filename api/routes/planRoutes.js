var express = require('express');
var router = express.Router();

var planModel = require('../models/plan');

router.get('/plan', function (request, response) {
  planModel.getPlan (function(error, data){
    response.status(200).json(data);
  });
});

router.use('/', require('../functions/BLOCK')); //Bloquea las siguientes rutas

router.get('/plan/:id', function(request, response) {
	var id = request.params.id;
	planModel.getPlanById(id, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.post('/plan', function(request, response) {
	var planData = {
    id: request.body.id,
		description: request.body.description,
    price: request.body.price,
	};
	console.log(request.body);
	planModel.insertPlan(planData, function(error, data) {
		if (data) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.put('/plan', function(request, response) {
	var planData = {
		id: request.body.id,
		description: request.body.description,
    price: request.body.price,
	};
	console.log(planData);
	planModel.updatePlan(planData, function(error, data) {
		if (data && data.mensaje) {
			response.status(200).json(data);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.delete('/plan/:id', function(request, response) {
	var id = request.params.id;
	planModel.deletePlan(id, function(error, data) {
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
