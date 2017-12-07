var express = require('express');
var router = express.Router();

var categoryModel = require('../models/category');

router.get('/category', function (request, response) {
  categoryModel.getCategory (function(error, data){
    response.status(200).json(data);
  });
});


router.get('/category/:id', function(request, response) {
	var id = request.params.id;
	categoryModel.getCategoryById(id, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.post('/category', function(request, response) {
	var categoryData = {
		name: request.body.name,
		description: request.body.description,
	};
	console.log(request.body);
	categoryModel.insertCategory(categoryData, function(error, data) {
		if (data) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.put('/category', function(request, response) {
	var categoryData = {
		id: request.body.id,
		name: request.body.name,
		description: request.body.description,
	};
	console.log(categoryData);
	categoryModel.updateCategory(categoryData, function(error, data) {
		if (data && data.mensaje) {
			response.status(200).json(data);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.delete('/category/:id', function(request, response) {
	var id = request.params.id;
	categoryModel.deleteCategory(id, function(error, data) {
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
