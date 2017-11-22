var conn = require('./connection');
var maria = require('mariasql');

connection = maria.createConnection(conn);

var jardin = {};

jardin.getJardines = function(callback) {
	if (connection) {
		connection.query('SELECT * FROM jardin', function(error, rows) {
			if (error) {
				throw error;
			}
			else {
				callback(null, rows);
			}
		});
	} 
}

jardin.getJardinById = function(id, callback) {
	if (connection) {
		var mariasql = 'SELECT * FROM jardin WHERE id = ' + connection.escape(id);
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

jardin.insertJardin = function(jardinData, callback) {
	if (connection) {
		connection.query('INSERT INTO jardin SET ?', jardinData, function(error, result) {
			if (error) {
				throw error;
			}
			else {
				callback(null, result.insertId);
			}
		});
	}
}

jardin.updateJardin = function(jardinData, callback) {
	if (connection) {
		var mariasql = 'UPDATE jardin SET titulo = ' + connection.escape(jardinData.titulo) + 'WHERE id = ' + jardinData.id;
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

jardin.deleteJardin = function(id, callback) {
	if (connection) {
		var mariasql = 'DELETE FROM jardin WHERE id = ' + connection.escape(id);
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

module.exports = jardin;