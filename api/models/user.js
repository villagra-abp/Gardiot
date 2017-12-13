var connection = require('../config/connection');
var bcrypt = require('bcryptjs');

var user = {};

user.getUser = function(callback) {
	if (connection) {
		connection.query('SELECT * FROM User', function(error, rows) {
			connection.end();
			if (error)
				throw error;
			else
				callback(null, rows);
		});
	}
}

user.getUserById = function(id, callback) {
	if (connection) { //Si el id es el mail finalmenente hay que poner las dobles comillas
		var mariasql = 'SELECT * FROM User WHERE id = "' + id + '"'; //Esto era connection.escape
		connection.query(mariasql, function(error, row) {
			connection.end();
			if (error)
				throw error;
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
		var sql = 'INSERT INTO User(id, password, active, city, plan, admin) VALUES("' + userData.id + '", "' + userData.password + '", 1, 1, "Free", 0)';
		connection.query(sql, function(error, result) {
			connection.end();
			if (error)
				throw error;
			else
				callback(null, result.affectedRows);
		});
	}
}

user.updateUser = function(userData, oldId, callback) { 
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
		if (userData.city)
			mariasql += 'city = ' + userData.city + ',';
		if (userData.plan)
			mariasql += 'plan = "' + userData.plan + '",';
		//mariasql = mariasql.slice(0, -1); //Delete last comma
		mariasql += 'WHERE id = "' + oldId + '"';
		connection.query(mariasql, function(error, result) {
			connection.end();
			if (error)
				throw error;
			else
				callback(null, {"mensaje":"Actualizado"});
		});
	}
}

user.deleteUser = function(id, callback) {
	if (connection) {
		var mariasql = 'DELETE FROM User WHERE id = "' + id + '"';
		connection.query(mariasql, function(error, result) {
			connection.end();
			if (error)
				throw error;
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
					throw err;
				else
					callback(null, hash);
			});
		}
	});
}

user.checkPassword = function(pw1, pw2, callback) {
	bcrypt.compare(pw1, pw2, function(err, isMatch) {
		if (err)
			throw err;
		else
			callback(null, isMatch);
	});
}



//connection.end();
module.exports = user;
