var express = require('express');
var router = express.Router();
var passport = require('passport');
var validator = require('validator');
var routeRequirements = require('../functions/routeRequirements');

var productModel = require('../models/product');

router.get('/admin/products/:number/:page/:sort', passport.authenticate('jwt', {session: false}), routeRequirements, function (request, response) {
  if (!validator.isInt(request.params.number, {gt: 0}) || !validator.isInt(request.params.page, {gt: 0}) ||  !validator.isAscii(request.params.sort))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		productModel.getProduct(request.params.number, request.params.page, request.params.sort, function(error, data){
			response.status(200).json(data);
	    });
	}
});

router.get('/product/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		productModel.getProductById(request.params.id, function(error, data) {
			if (typeof data !== 'undefined')
				response.status(200).json(data);
			else
				response.status(404).json({"Mensaje":"No existe"});
		});
	}
});

router.get('/productType/:type/:number/:page/:sort', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isAscii(request.params.type, {gt: 0}) || !validator.isInt(request.params.number, {gt: 0}) || !validator.isInt(request.params.page, {gt: 0}) ||  !validator.isAscii(request.params.sort))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		productModel.getProductsByType(request.params.number, request.params.page, request.params.sort, request.params.type, function(error, data) {
			if (typeof data !== 'undefined')
				response.status(200).json(data);
			else
				response.status(404).json({"Mensaje":"No existe"});
		});
	}
});

router.get('/productTreatment/:id/:number/:page/:sort', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0}) || !validator.isInt(request.params.number, {gt: 0}) || !validator.isInt(request.params.page, {gt: 0}) ||  !validator.isAscii(request.params.sort))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		productModel.getProductsByTreatment(request.params.number, request.params.page, request.params.sort, request.params.id, function(error, data) {
			if (typeof data !== 'undefined')
				response.status(200).json(data);
			else
				response.status(404).json({"Mensaje":"No existe"});
		});
	}
});

router.get('/admin/numProducts', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	productModel.getProductsNumber(function(error, data) {
		response.status(200).json(data);
	});
});

// búsqueda por nombre
/*router.get('/productSearch/:name', function(request, response) {
	var name = request.params.name;
	productModel.getProductSearch(name, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

// búsqueda por precio MENOR que
router.get('/productFilterLessThan/:price', function(request, response) {
	var price = request.params.price;
	productModel.getProductFilterLessThan(price, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

// búsqueda por precio MAYOR que
router.get('/productFilterMoreThan/:price', function(request, response) {
	var price = request.params.price;
	productModel.getProductFilterMoreThan(price, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});*/

router.post('/admin/product', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!request.body.name)
		response.status(400).json({"Mensaje":"Faltan parámetros necesarios"});
	else {
		var productData = {
			name: request.body.name,
			type: request.body.type,
			description: request.body.description,
		};
		var validate = validateInput(productData);
		if (validate.length > 0)
			response.status(400).json({"Mensaje": validate});
		else {
			productData = sanitizeInput(productData);
			productModel.insertProduct(productData, function(error, data) {
				if (data)
					response.status(200).json({"Mensaje":"Insertado"});
				else
					response.status(500).json({"Mensaje":"Error"});
			});
		}
	}
});

router.put('/admin/product/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		var productData = {
			name: request.body.name,
			type: request.body.type,
			description: request.body.description,
		};
		var validate = validateInput(productData);
		if (validate.length > 0)
			response.status(400).json({"Mensaje": validate});
		else {
			productData = sanitizeInput(productData);
			productModel.updateProduct(productData, request.params.id, function(error, data) {
				if (data == 1)
					response.status(200).json({"Mensaje":"Actualizado"});
				else if (data == 0)
					response.status(404).json({"Mensaje":"No existe"});
				else
					response.status(500).json({"Mensaje":error.message});
			});
		}
	}
});

router.delete('/admin/product/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		productModel.deleteProduct(request.params.id, function(error, data) {
			if (data == 1)
				response.status(200).json({"Mensaje":"Borrado"});
			else if (data == 0)
				response.status(404).json({"Mensaje":"No existe"});
			else
				response.status(500).json({"Mensaje":error.message});
		});
	}
});

function sanitizeInput(data) {
  if (data.id) {  data.id = validator.trim(data.id); data.id = validator.toInt(data.id);}
  if (data.name) { data.name = validator.trim(data.name); data.name = validator.stripLow(data.name); data.name = validator.escape(data.name);}
  if (data.description) { data.description = validator.trim(data.description); data.description = validator.stripLow(data.description); data.description = validator.escape(data.description);}
  if (data.type) { data.type = validator.trim(data.type); data.type = validator.stripLow(data.type); data.type = validator.escape(data.type);}

  return data;
}

function validateInput(data) {
  var resp = '';
  if (data.id && !validator.isInt(data.id)) resp += 'ID no válido, ';
  if (data.name && !validator.isAscii(data.name)) resp += 'Nombre no válido, ';
  if (data.description && !validator.isAscii(data.description)) resp += 'Descripción no válida, ';
  if (data.type && !validator.isAscii(data.type)) resp += 'Tipo no válido, ';
  if (resp) resp = resp.slice(0, -2);
  return resp;
}

module.exports = router;
