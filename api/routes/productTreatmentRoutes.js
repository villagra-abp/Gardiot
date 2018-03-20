var express = require('express');
var router = express.Router();
var passport = require('passport');
var validator = require('validator');
var routeRequirements = require('../functions/routeRequirements');
var filter = require('../functions/filter');

var productTreatmentModel = require('../models/productTreatment');

router.get('/productTreatmentPlant/:treatment/:plant/:number/:page/:sort', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.plant, {gt: 0}) || !validator.isInt(request.params.treatment, {gt: 0}) || !validator.isInt(request.params.number, {gt: 0}) || !validator.isInt(request.params.page, {gt: 0}) ||  !validator.isAscii(request.params.sort))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		productTreatmentModel.getProductsByTreatmentAndPlant(request.params.number, request.params.page, request.params.sort, request.params.treatment, request.params.plant, function(error, data) {
			if (typeof data !== 'undefined')
				response.status(200).json(data);
			else
				response.status(404).json({"Mensaje":"No existe"});
		});
	}
});

router.post('/admin/productTreatment', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	var productTreatment = {
		plant: request.body.plant,
		treatment: request.body.treatment,
		product: request.body.product,
	};
	productTreatment = filter(productTreatment); 
	if (typeof productTreatment.plant=== 'undefined' || typeof productTreatment.product === 'undefined' || typeof productTreatment.treatment === 'undefined')
		response.status(400).json({"Mensaje":"Faltan parámetros necesarios."});
	else {		
		var validate = validateInput(productTreatment);
		if (validate.length > 0)
			response.status(400).json({"Mensaje": validate});
		else {
			productTreatmentModel.insertProductTreatment(productTreatment, function(error, data) {
				if (data)
					response.status(200).json({"Mensaje":"Insertado"});
				else
					response.status(500).json({"Mensaje":error.message});
			});
		}
	}
});

router.delete('/admin/productTreatment/:plant/:treatment/:product', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.plant, {gt: 0}) || !validator.isInt(request.params.treatment, {gt: 0}) || !validator.isInt(request.params.product, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		productTreatmentModel.deleteProductTreatment(request.params.plant, request.params.treatment, request.params.product, function(error, data) {
			if (data == 1)
				response.status(200).json({"Mensaje":"Borrado"});
			else if (data == 0)
				response.status(404).json({"Mensaje":"No existe"});
			else
				response.status(500).json({"Mensaje":error.message});
		});
	}
});

function validateInput(data) {
  var resp = '';
  if (typeof data.plant !== 'undefined' && !validator.isInt(data.plant)) resp += 'Planta no válida, ';
  if (typeof data.treatment !== 'undefined' && !validator.isInt(data.treatment)) resp += 'Tratamiento no válida, ';
  if (typeof data.product !== 'undefined' && !validator.isInt(data.product)) resp += 'Producto no válida, ';
  if (resp) resp = resp.slice(0, -2);
  return resp;
}

module.exports = router;