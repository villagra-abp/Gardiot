var connection = require('../config/connection');
var bcrypt = require('bcryptjs');

var user = {};

user.getUser = function(callback) {
	if (connection) {
		connection.query('SELECT * FROM User', function(error, rows) {
			//connection.end();
			if (error)
				callback(error, null);
			else
				callback(null, rows);
		});
	}
}

user.getUserById = function(id, callback) {
	if (connection) { //Si el id es el mail finalmenente hay que poner las dobles comillas
		var mariasql = 'SELECT * FROM User WHERE id = "' + id + '"'; //Esto era connection.escape
		connection.query(mariasql, function(error, row) {
			//connection.end();
			if (error)
				callback(error, null);
			else
				callback(null, row);		
		});
	}
}

/* user.insertUser = function(userData, callback) { //Falta sanear INT
	if (connection) {
		var sql = 'INSERT INTO User(id, password, name, birthDate, photo, active, city, plan) VALUES("' + userData.id + '", "' + userData.password + '", "' + userData.name + '", ' + userData.birthDate + ', "' + userData.photo + '", ' + userData.active + ', ' + userData.city + ', "' + userData.plan +'")';
		connection.query(sql, function(error, result) {
			if (error)
				throw error;
			else
				callback(null, result.info.affectedRows);
		});
	}
}*/

user.insertUser = function(userData, callback) { //Falta sanear INT
	if (connection) {
		var mariasql = 'INSERT INTO User SET id = "' + userData.id +'",';
		if (userData.password) 
			mariasql += 'password = "' + userData.password + '",';
		if (userData.name)
			mariasql += 'name = "' + userData.name + '",';
		if(userData.lastName)
			mariasql += 'lastName = "' + userData.lastName + '",';
		if (userData.birthDate)
			mariasql += 'birthDate = "' + userData.birthDate + '",';
		if (userData.photo)
			mariasql += 'photo = "' + userData.photo + '",';
		if (userData.access)
			mariasql += 'access = "' + userData.access + '",';
		if (userData.googleId)
			mariasql += 'googleId = "' + userData.googleId + '", active = 1,';
		if (userData.facebookId)
			mariasql += 'facebookId = "' + userData.facebookId + '", active = 1,';

		//TODOS LOS USUARIOS COMO ACTIVOS, PROVISIONAL
		//mariasql += 'active = "1",';
		
		mariasql = mariasql.slice(0, -1); //Delete last comma
		connection.query(mariasql, function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, result.affectedRows);
		});
	}
}

user.updateUser = function(userData, callback) {
	if (connection) {
		var mariasql = 'UPDATE User SET ';
		if (userData.id)
			mariasql += 'id = "' + userData.id +'",';
		if (userData.password) //Todo esto es en caso de que no se haga un GET para mostrar los valores anteriores en el formulario
			mariasql += 'password = "' + userData.password + '",';
		if (userData.name)
			mariasql += 'name = "' + userData.name + '",';
		if (userData.birthDate)
			mariasql += 'birthDate = ' + userData.birthDate + ',';
		if (userData.photo)
			mariasql += 'photo = "' + userData.photo + '",';
		if (userData.countryCode)
			mariasql += 'countryCode = "' + userData.countryCode + '",';
		if (userData.city)
			mariasql += 'city = "' + userData.city + '",';
		if (userData.plan)
			mariasql += 'plan = "' + userData.plan + '",';
		if (userData.access)
			mariasql += 'access = "' + userData.access + '",';
		if (userData.googleId)
			mariasql += 'googleId = "' + userData.googleId + '",';
		if (userData.facebookId)
			mariasql += 'facebookId = "' + userData.facebookId + '",';
		mariasql = mariasql.slice(0, -1); //Delete last comma
		mariasql += 'WHERE id = "' + userData.oldId + '"';
		connection.query(mariasql, function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, {"mensaje":"Actualizado"});
		});
	}
}

user.updatePassword = function (email, password, callback) {
	if (connection) {
		connection.query('UPDATE User SET password = "' + password + '" WHERE id = "' + email + '"', function (error, result) {
			if (error) callback(error, null);
			else callback (null, {"Mensaje":"Actualizado"});
		});
	}
}

user.deleteUser = function(id, callback) {
	if (connection) {
		var mariasql = 'DELETE FROM User WHERE id = "' + id + '"';
		connection.query(mariasql, function(error, result) {
			//connection.end();
			if (error)
				callback(error, null);
			else
				callback(null, result.affectedRows);
		});
	}
}

user.deactivateUser = function(id, callback) {
	if (connection) {
		var mariasql = 'UPDATE User SET active = 0 WHERE id = "' + id + '"';
		connection.query(mariasql, function(error, result) {
			//connection.end();
			if (error)
				callback(error, null);
			else
				callback(null, result.affectedRows);
		});
	}
}

user.activateUser = function(id, callback) {
	if (connection) {
		var mariasql = 'UPDATE User SET active = 1 WHERE id = "' + id + '"';
		connection.query(mariasql, function(error, result) {
			//connection.end();
			if (error)
				callback(error, null);
			else
				callback(null, result.affectedRows);
		});
	}
}

user.genHash = function(password, callback) {
	bcrypt.genSalt(10, function(err, salt) {
		if (err)
			throw err;
		else {
			bcrypt.hash(password, salt, function(err, hash) {
				if (err)
					callback(err, null);
				else
					callback(null, hash);
			});
		}
	});
}

user.checkPassword = function(pw1, pw2, callback) {
	bcrypt.compare(pw1, pw2, function(err, isMatch) {
		if (err)
			callback(err, null);
		else
			callback(null, isMatch);
	});
}

//connection.end();
module.exports = user;
