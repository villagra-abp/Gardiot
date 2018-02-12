var express = require('express');
var router = express.Router();
var config = require('../config/main');
var sendgrid = require('../config/sendgrid');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var validator = require('validator');
var nodemailer = require('nodemailer');
var isEmail = require('isemail');
var userModel = require('../models/user');
var verificationTokenModel = require('../models/verificationToken');
var inactiveTokenModel = require('../models/inactiveToken');

var routeRequirements = require('../functions/routeRequirements');

/***************************
*		NO AUTH ROUTES
***************************/

//*** Registro de usuario. Registrar solo con id, password de momento

router.post('/register', function(request, response) {
	if (!request.body.id || !request.body.password || !request.body.password2) 
		response.status(400).json({"Mensaje":"Introduce usuario y ambas contraseñas"});
	else if (request.body.password !== request.body.password2){
		console.log(request.body.password2);
		console.log(request.body.password);
		
		response.status(400).json({"Mensaje":"Las contraseñas no coinciden"});
	}
	else {
		var userData = {
			id: request.body.id,
			password: request.body.password,
		};
		var validate = validateInput(userData);
		if (validate.length > 0)
			response.status(400).json({"Mensaje": validate});
		else {
			userData = sanitizeInput(userData);
			userModel.getUserById(userData.id, function(error, data) {
				if (typeof data[0] !== 'undefined') 
					response.status(400).json({"Mensaje":"Este usuario ya existe"});
				else {					
					userModel.genHash(userData.password, function(error, hash) {
						if (!error) {
							userData.password = hash;
							userModel.insertUser(userData, function(error, data) {
								if (data == 1) {
									var token = jwt.sign({}, config.secret, {
										expiresIn: '1h',
										subject: userData.id
									});
									verificationTokenModel.insertVerificationToken(userData.id, token, function(error, result) {
										if (error) response.status(500).json({"Mensaje":err.message});
										else {
											if (request.hostname == 'gardiot.ovh') {
												var transporter = nodemailer.createTransport({service: 'Sendgrid', auth: {user: sendgrid.auth, pass: sendgrid.password} }); //Coger de fichero
												var mailOptions = {from: 'symbiosegardiot@gmail.com', to: userData.id, subject: 'Verifica tu dirección de correo electrónico', text: 'Hola,\n\n' + 'Por favor verifica tu cuenta con el siguiente enlace: \nhttp:\/\/' + request.hostname + '\/app\/confirmation\/' + token + '\n'};
												transporter.sendMail(mailOptions, function(err) {
													if (err) response.status(500).json({"Mensaje": err.message});
													else response.status(201).json({"Mensaje":"Un email de verificación se ha enviado a " + userData.id + "."});													
												});
											}
											else { //LOCALHOST
												var token = jwt.sign({}, config.secret, {
													expiresIn: '6h',
													audience: "gardiot.ovh",
													subject: userData.id
												});
												response.status(201).json({"Token":token});
											}											
										}
									});
								}
								else
									response.status(500).json({"Mensaje":error.message});
							});
						}
					});
				}
			});
		}
	}
});


//*** Autenticacion con id, password

router.post('/authenticate', function(request, response) {
	if (!request.body.id || !request.body.password) 
		return response.status(400).json({"Mensaje":"Introduce usuario y contraseña"});	
	if (!validator.isEmail(request.body.id))
		response.status(400).json({"Mensaje":"Introduce un email válido"});
	else {
		var id = validator.trim(request.body.id);
		userModel.getUserById(id, function (error, user) {
			if (typeof user[0] !== 'undefined') {
				if (request.hostname == 'localhost' || user[0].active == 1) {
					if (user[0].access.search("local")==-1) response.status(403).json({"Mensaje":"Esta cuenta se autentica mediante Google"});
					else if (user[0].dateDelete !== 'undefined') response.status(403).json({"Mensaje":"Esta cuenta se ha dado de baja. Contacta con el administrador del sistema."});
					else {
						userModel.checkPassword(request.body.password, user[0].password, function(err, isMatch) {
							if (isMatch && !err) {
								var token = jwt.sign({}, config.secret, {
									expiresIn: '6h',
									audience: "gardiot.ovh",
									subject: user[0].id
								});
								response.status(200).json({"Token":token});
							}
							else response.status(401).json({"Mensaje":"Contraseña incorrecta"});
						});
					}	
				}
				else response.status(403).json({"Mensaje":"Cuenta no activa"});
			}
			else response.status(404).json({"Mensaje":"No existe el usuario"});
		});
	}
});

router.get('/isAuthenticated', function(request, response) {
	if (request.user)
		response.status(200).send(true); 
	else
		response.status(200).send(false);
});

/***************************
*		USER ROUTES
***************************/

//***Muestra al usuario actual. Sin parametros

router.get('/user', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	response.status(200).json({"Name:":request.user.name, "LastName":request.user.lastName, "Photo":request.user.photo}); //PASSPORT devuelve siempre el objeto user
});


//*** Saber si es admin

router.get('/isAdmin', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (request.user.admin == 1)
		response.status(200).send(true); 
	else
		response.status(200).send(false);
});


//***Actualiza al usuario actual

router.put('/user', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	var userData = {
		id: request.body.id,
		password: request.body.password,
		name: request.body.name,
		lastName: request.body.lastName,
		birthDate: request.body.birthDate,
		photo: request.body.photo,
		countryCode: request.body.countryCode,
		city: request.body.city,
		oldId: request.user.id
	};
	var validate = validateInput(userData);
	if (validate.length > 0)
		response.status(400).json({"Mensaje": validate});
	else {
		userData = sanitizeInput(userData);
		if (userData.password) {
			if (!request.body.oldPassword)
				response.status(500).json({"Mensaje":"Introduce tu contraseña anterior para cambiarla"});
			else if (request.body.password !== request.body.password2)
				response.status(400).json({"Mensaje":"Las contraseñas nuevas no coinciden"});
			else {
				userModel.checkPassword(request.body.oldPassword, request.user.password, function(err, isMatch) { 
					if (isMatch && !err) {
						userModel.genHash(userData.password, function(error, hash) {
							if (!error) {
								userData.password = hash;
								userModel.updateUser(userData, function(error, data) {
									if (data)
										response.status(200).json({"Mensaje":"Actualizado"});
									else
										response.status(500).json({"Mensaje":"Error"});
								});
							}
							else response.status(500).json({"Mensaje":"Error con la contraseña"}); 
						});
					}
					else response.status(401).json({"Mensaje":"Contraseña anterior incorrecta"});
				});				
			}	
		}
		else {
			userModel.updateUser(userData, function(error, data) {
				if (data)
					response.status(200).json({"Mensaje":"Actualizado"});
				else
					response.status(500).json({"Mensaje":"Error"});
			});
		}		
	}
});


//*** Darse de baja. Sin parametros

router.patch('/user', passport.authenticate('jwt', {session: false}), routeRequirements,  function(request, response) {
	userModel.deactivateUser(request.user.id, function(error, data) {
		if (data == 1)
			response.status(200).json({"Mensaje":"Cuenta desactivada"});
		else if (data == 0)
			response.status(404).json({"Mensaje":"No existe"});
		else
			response.status(500).json({"Mensaje":"Error"});
	});
});

//*** Logout

router.get('/logout', passport.authenticate('jwt', {session: false}), routeRequirements,  function(request, response) {
	//var token = jwtExtract.fromAuthHeaderAsBearerToken();
	var token = request.headers.authorization;
	token = token.slice(7);
	inactiveTokenModel.insertInactiveToken(token, function (error, data) {	
		if (data == 1) { request.logout(); response.status(200).json({"Mensaje":"Desconectado"});  }
		else if (data == 0) response.status(500).json({"Mensaje":"Error interno"});
		else  response.status(500).json({"Mensaje":"Error desconectando, pruébalo otra vez."});
	});	
});

/***************************
*		ADMIN ROUTES
***************************/

//*** Lista todos los usuarios

router.get('/admin/users', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	userModel.getUser (function(error, data) {
		response.status(200).json(data);
	});
});

//*** Muestra a un usuario concreto. Pasar usuario como /user/juanito@gmail.com

router.get('/admin/user/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	userModel.getUserById(request.params.id, function(error, data) {
		if (typeof data[0] !== 'undefined')
			response.status(200).json(data);
		else
			response.status(404).json({"Mensaje":"No existe"});
	});
});

//*** Desactiva a un usuario. Misma forma que antes

router.patch('/admin/user/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	userModel.deactivateUser(request.params.id, function(error, data) {
		if (error)
			response.status(500).json({"Mensaje":"Error: " + error});
		else if (data == 1)
			response.status(200).json({"Mensaje":"Desactivado"});
		else if (data == 0)
			response.status(404).json({"Mensaje":"No existe"});
		else
			response.status(500).json({"Mensaje":"Error"});
	});
});

//*** Elimina a un usuario 

router.delete('/admin/user/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	userModel.deleteUser(request.params.id, function(error, data) {
		if (error)
			response.status(500).json({"Mensaje":"Error: " + error});
		else if (data == 1)
			response.status(200).json({"Mensaje":"Eliminado"});
		else if (data == 0)
			response.status(404).json({"Mensaje":"No existe"});
		else
			response.status(500).json({"Mensaje":"Error"});
	});
});


//***Actualiza a otro usuario

router.put('/admin/user/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	var userData = {
		id: request.body.id,
		password: request.body.password,
		name: request.body.name,
		lastName: request.body.lastName,
		birthDate: request.body.birthDate,
		photo: request.body.photo,
		city: request.body.city,
		countryCode: request.body.countryCode,
		oldId: request.params.id,
	};
	var validate = validateInput(userData);
	if (validate.length > 0)
		response.status(400).json({"Mensaje": validate});
	else {
		userData = sanitizeInput(userData);
		if (userData.password) {
			userModel.genHash(userData.password, function(error, hash) {
				if (!error) {
					userData.password = hash;
					userModel.updateUser(userData, function(error, data) {
						if (data)
							response.status(200).json({"Mensaje":"Actualizado"});
						else
							response.status(500).json({"Mensaje":"Error"});
					});
				}
				else response.status(500).json({"Mensaje":"Error con la contraseña"}); 
			});						
		}
		else {
			userModel.updateUser(userData, function(error, data) {
				if (data)
					response.status(200).json({"Mensaje":"Actualizado"});
				else
					response.status(500).json({"Mensaje":"Error"});
			});
		}		
	}
});



function sanitizeInput(data) {
	if (data.id) {  data.id = validator.trim(data.id);}
	if (data.name) { data.name = validator.trim(data.name); data.name = validator.stripLow(data.name); data.name = validator.escape(data.name);}
	//if (data.birthDate) data.birthDate = validator.toDate(data.birthDate);
	if (data.photo) data.photo = validator.trim(data.photo);
	//if (data.city) { data.city = validator.trim(data.city); data.city = validator.toInt(data.city);}
	if (data.plan) { data.plan = validator.trim(data.plan); data.plan = validator.stripLow(data.plan); data.plan = validator.escape(data.plan);}
	if (data.oldId) {data.oldId = validator.trim(data.oldId);}
	return data;
}

function validateInput(data) {
	var resp = '';
	if (data.id && !validator.isEmail(data.id) && !isEmail.validate(data.id)) resp += 'Email no válido, ';
	if (data.name && !validator.isAlpha(data.name, 'es-ES')) resp += 'Nombre no válido, ';
	if (data.birthDate && validator.isAfter(data.birthDate)) resp += 'Fecha no válida, ';
	//if (data.city && !validator.isInt(data.city)) resp += 'Ciudad no válida, ';
	if (data.photo && !validator.isURL(data.photo)) resp += 'Foto no válida, ';
	if (data.plan && !validator.isAlpha(data.plan, 'es-ES')) resp += 'Plan no válido, ';
	if (data.oldId && !validator.isEmail(data.oldId) && !isEmail.validate(data.oldId)) resp += 'Email anterior no válido, ';
	if (resp) resp = resp.slice(0, -2);
	return resp;
}

module.exports = router;
