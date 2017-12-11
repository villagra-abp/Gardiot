var express = require('express');
var router = express.Router();

var productModel = require('../models/product');

router.get('/product', function(request, response) {
	productModel.getProduct (function(error, data) { //Asocia la llamada con la funcion del modelo
		response.status(200).json(data);
	});
});

router.get('/product/:id', function(request, response) {
	var id = request.params.id;
	productModel.getProductById(id, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.post('/product', function(request, response) {
	var productData = {
		name: request.body.name,
		price: request.body.price,
	};
	console.log(request.body);
	productModel.insertProduct(productData, function(error, data) {
		if (data) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.put('/product', function(request, response) {
	var productData = {
		id: request.body.id,
		name: request.body.name,
		price: request.body.price,
	};
	console.log(productData);
	productModel.updateProduct(productData, function(error, data) {
		if (data && data.mensaje) {
			response.status(200).json(data);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.delete('/product/:id', function(request, response) {
	var id = request.params.id;
	productModel.deleteProduct(id, function(error, data) {
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
