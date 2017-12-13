var express = require('express');
var router = express.Router();
var config = require('../config/main'); 
var jwt = require('jsonwebtoken');
var passport = require('passport');
var validator = require('validator');

var userModel = require('../models/user');
var requireAdmin = require('../config/adminCheck');
var tokenDecoder = require('../config/tokenDecoder');


/***************************
*		NO AUTH ROUTES
***************************/

//*** Registro de usuario. Registrar solo con id, password de momento

router.post('/register', function(request, response) {
	if (!request.body.id || !request.body.password) { //PROBABLEMENTE ESTO SE PUEDA CONTROLAR DESDE EL FRONTEND MEJOR
		response.status(500).json({"Mensaje":"Introduce usuario y contraseña"});
	}
	else {
		var userData = {
			id: request.body.id, 
			password: request.body.password,
			name: request.body.name,
			birthDate: request.body.birthDate,
			photo: request.body.photo,
			city: request.body.city,
			plan: request.body.plan
		};
		userData = sanitizeInput(userData);
		userModel.genHash(userData.password, function(error, hash) {
			if (!error) {
				userData.password = hash;
				userModel.insertUser(userData, function(error, data) {
					if (data) 
						response.status(200).json({"Mensaje":"Insertado"});					
					else 
						response.status(500).json({"Mensaje":"Error"});					
				});
			}
		});
	}
});


//*** Autenticacion con id, password

router.post('/authenticate', function(request, response) {
	var id = validator.normalizeEmail(validator.trim(request.body.id));
	userModel.getUserById(id, function (error, user) {
		if (typeof user !== 'undefined' && user.length > 0) {
			userModel.checkPassword(request.body.password, user[0].password, function(err, isMatch) { 
				if (isMatch && !err) {
					if (user[0].admin == 1) user[0].admin = true;
					else user[0].admin = false;
					var payload = {id: user[0].id, admin: user[0].admin}; //Aqui se puede poner el nombre para que aparezca siempre
					var token = jwt.sign(payload, config.secret, { 
						expiresIn: 10080 //El id de user debe ir en sub
					});
					response.status(200).json({"Token":token});
				}
				else
					response.status(401).json({"Mensaje":"Las contraseñas no coinciden"});
			});
		}
		else {
			response.status(404).json({"Mensaje":"No existe el usuario"});
		}
	});
});

/***************************
*		USER ROUTES
***************************/

//***Muestra al usuario actual. Sin parametros

router.get('/user', passport.authenticate('jwt', {session: false}), function(request, response) {
	tokenDecoder(request, response, function(err, token) {
		if (err)
			response.status(400).json({"Mensaje":"Error con el token"});
		else {
			userModel.getUserById(token.id, function(error, data) {
				if (typeof data !== 'undefined' && data.length > 0) {
					response.status(200).json(data);
				}
				else {
					response.status(404).json({"Mensaje":"No existe"});
				}
			});
		}
	});					
});


//***Actualiza al usuario actual

router.put('/user', passport.authenticate('jwt', {session: false}), function(request, response) {
	tokenDecoder(request, response, function(err, token) {
		if (err)
			response.status(400).json({"Mensaje":"Error con el token"});
		else {
			var userData = { //Si no se comprueban que existen estos valores, peta
				id: request.body.id, 
				password: request.body.contrasenya,
				name: request.body.name,
				birthDate: request.body.birthDate,
				photo: request.body.photo,
				city: request.body.city,
				plan: request.body.plan
			};
			userData = sanitizeInput(userData);
			if (userData.password) {
				userModel.genHash(userData.password, function(error, hash) {
					if (!error) {
						userData.password = hash;
						userModel.updateUser(userData, token.id, function(error, data) {
							if (data) 
								response.status(200).json({"Mensaje":"Actualizado"});					
							else 
								response.status(500).json({"Mensaje":"Error"});					
						});
					}
				});
			}
			else {
				userModel.updateUser(userData, token.id, function(error, data) {
					if (data) 
						response.status(200).json({"Mensaje":"Actualizado"});					
					else 
						response.status(500).json({"Mensaje":"Error"});	
				});
			}									
		}
	});
});

//*** Darse de baja. Sin parametros

router.delete('/user', passport.authenticate('jwt', {session: false}),  function(request, response) {
	tokenDecoder(request, response, function (err, token) {
		if (err)
			response.status(400).json({"Mensaje":"Error con el token"});
		else {
			userModel.deleteUser(token.id, function(error, data) {
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
		}
	});
});

//*** Logout

/*router.get('/logout', passport.authenticate('jwt', {session: false}),  function(request, response) {
	request.logout();
	console.log(request.user);
	tokenDecoder(request, response, function(err, token) {
		if (err)
			response.status(400).json({"Mensaje":"Error con el token"});
		else {
			response.status(200).json(token);
		}
	});
}); */

/***************************
*		ADMIN ROUTES
***************************/

//*** Lista todos los usuarios

router.get('/users', passport.authenticate('jwt', {session: false}), requireAdmin, function(request, response) {
	userModel.getUser (function(error, data) { 
		response.status(200).json(data);
	});
});



//*** Muestra a un usuario concreto. Pasar usuario como /user/juanito@gmail.com

router.get('/user/:id', passport.authenticate('jwt', {session: false}), requireAdmin, function(request, response) {
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


//*** Elimina a un usuario. Misma forma que antes

router.delete('/user/:id', passport.authenticate('jwt', {session: false}), requireAdmin, function(request, response) {
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


/*
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
	userData = sanitizeInput(userData);
	userModel.updateUser(userData, function(error, data) {
		if (data && data.mensaje) {
			response.status(200).json(data);			
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
}); */


function sanitizeInput(data) {
	if (data.id) { data.id = validator.normalizeEmail(data.id); data.id = validator.trim(data.id);}
	if (data.name) { data.name = validator.trim(data.name); data.name = validator.stripLow(data.name); data.name = validator.escape(data.name);}
	if (data.birthDate) data.birthDate = validator.toDate(request.body.date);
	if (data.photo) data.photo = validator.trim(data.photo);
	if (data.city) { data.city = validator.trim(data.city); data.city = validator.toInt(data.city);}
	if (data.plan) { data.name = validator.trim(data.name); data.name = validator.stripLow(data.name); data.name = validator.escape(data.name);}
	return data;
}

module.exports = router;