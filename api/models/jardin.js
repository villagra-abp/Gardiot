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
		var mariasql = 'SELECT * FROM jardin WHERE idJardin = ' + connection.escape(id);
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
		if (!jardinData.idJardin) //SANEAR INTEGER PARA VALORES VACIOS
			jardinData.idJardin = "NULL";
		//var mariasql = 'INSER INTO jardin SET idJardin = ' + jardinData.idJardin + ', titulo = ' + jardinData.titulo;
		var mariasql2 = 'INSERT INTO jardin(idJardin, titulo) VALUES(' + jardinData.idJardin +' ,"' + jardinData.titulo + '")';
		connection.query(mariasql2, function(error, result) {
		//connection.query('INSERT INTO jardin SET ?', jardinData, function(error, result) {
			if (error) {
				throw error;
			}
			else {
				callback(null, result.info.affectedRows); //Si es autoincremental cambiar por insertId
			}
		});
	}
}

jardin.updateJardin = function(jardinData, callback) {
	if (connection) {
		var mariasql = 'UPDATE jardin SET titulo = ' + connection.escape(jardinData.titulo) + 'WHERE idJardin = ' + jardinData.id;
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
		var mariasql = 'DELETE FROM jardin WHERE idJardin = ' + connection.escape(id);
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
module.exports = jardin;