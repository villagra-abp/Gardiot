var express = require('express'); 
var router = express.Router();
var passport = require('passport'); //Al pasarlo en las rutas comprueba que el usuario esta autenticado

//Estas funciones se pasan en las llamadas y son comprobaciones. En caso de fallar alguna, no deja el paso
var requireAdmin = require('../functions/adminCheck'); //Comprueba que el usuario es administrador
var requireActive = require('../functions/userActiveCheck'); //Comprueba que el usuario es activo
var requireActiveToken = require('../functions/tokenCheck'); //Comprueba que el token no esta en la lista negra

var categoryModel = require('../models/category'); //Carga del modelo donde están las llamadas a la BD


//Lista todas las categorias
router.get('/category', passport.authenticate('jwt', {session: false}), requireActive, requireActiveToken, function (request, response) {
  categoryModel.getCategory (function(error, data){ //Llama a la funcion del modelo
    response.status(200).json(data); //Devuelve el status code HTTP junto a los resultados en JSON
  });
});

//Lista una categoria, se llama /categoria/4 por ejemplo
router.get('/category/:id', passport.authenticate('jwt', {session: false}), requireActive, requireActiveToken, function(request, response) {
	var id = request.params.id; //Recoge el parametro id de la ruta
	categoryModel.getCategoryById(id, function(error, data) {
		if (typeof data[0] !== 'undefined') { //Comprueba que hay datos devueltos
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

//Anyade una categoria, notese que aqui se pasa el requireAdmin
router.post('/category', passport.authenticate('jwt', {session: false}), requireActive, requireAdmin, requireActiveToken, function(request, response) {
	var categoryData = { //En el request.body los valores se cogen de un formulario
		name: request.body.name,
		description: request.body.description,
	};

	categoryModel.insertCategory(categoryData, function(error, data) {
		if (data) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":error.message});
		}
	});
});

//Actualiza una categoria, tambien require administrador
router.put('/category/:id', passport.authenticate('jwt', {session: false}), requireActive, requireAdmin, requireActiveToken, function(request, response) {
	var categoryData = {
		id: request.params.id, //Recoge el id de la categoria en la llamada a la ruta
		name: request.body.name, //Recoge estos valores del formulario
		description: request.body.description,
	};
	
	categoryModel.updateCategory(categoryData, function(error, data) {
		if (data == 1) { //Affected rows devuelve si se ha afectado alguna fila. El caso ideal es que se ha modificado una sola fila
			response.status(200).json({"Mensaje":"Actualizado"});
		}
		else if (data == 0) {
			response.status(404).json({"Mensaje":"No existe"});
		}
		else {
			response.status(500).json({"Mensaje":error.message});
		}
	});
});

//Borra una categoria, tambien require administrador
router.delete('/category/:id', passport.authenticate('jwt', {session: false}), requireActive, requireAdmin, requireActiveToken, function(request, response) {
	var id = request.params.id;
	categoryModel.deleteCategory(id, function(error, data) {
		if (data == 1) { //Affected rows devuelve si se ha afectado alguna fila. El caso ideal es que se ha modificado una sola fila
			response.status(200).json({"Mensaje":"Borrado"});
		}
		else if (data == 0) {
			response.status(404).json({"Mensaje":"No existe"});
		}
		else {
			response.status(500).json({"Mensaje":error.message});
		}
	});
});

module.exports = router;
