//var conn = require('./connection');
var mariadb = require('mariasql');

var connection = new mariadb({
	host: 'localhost',
	user: 'root',
	password: 'gardiot',
	charset: 'utf8',
	db: 'gardiotDB'
});

//connection = mariadb.createConnection(conn);

var usuarios = {};

usuarios.getUsuarios = function(callback) {
	if (connection) {
		connection.query('SELECT * FROM usuarios', function(error, rows) {
			if (error) {
				throw error;
			}
			else {
				callback(null, rows);
			}
		});
	} 
}

usuarios.getUsuariosById = function(id, callback) {
	if (connection) {
		var mariasql = 'SELECT * FROM usuarios WHERE idUsuarios = ' + connection.escape(id);
		connection.query(mariasql, function(error, row) {
			if (error) {
				throw error;
			}
			else {
				callback(null, row);
			}
		});
	}
}

usuarios.insertUsuarios = function(usuariosData, callback) {
	if (connection) {
		//var sql = 'INSER INTO usuarios SET ?'
		connection.query('INSERT INTO usuarios SET ?', usuariosData, function(error, result) {
			if (error) {
				throw error;
			}
			else {
				callback(null, result.insertid);
			}
		});
	}
}

usuarios.updateUsuarios = function(usuariosData, callback) { 
	if (connection) {
		var mariasql = 'UPDATE usuarios SET contrasenya = ' + usuariosData.contrasenya + 'WHERE idusuarios = ' + usuariosData.id;
		connection.query(mariasql, function(error, result) {
			if (error) {
				throw error;
			}
			else {
				callback(null, {"mensaje":"Actualizado"});
			}
		});
	}
}

usuarios.deleteUsuarios = function(id, callback) {
	if (connection) {
		var mariasql = 'DELETE FROM usuarios WHERE idUsuarios = ' + connection.escape(id);
		connection.query(mariasql, function(error, result) {
			if (error) {
				throw error;
			}
			else {
				callback(null, {"mensaje":"Borrado"});
			}
		});
	}
}

connection.end();
module.exports = usuarios;