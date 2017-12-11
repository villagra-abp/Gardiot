//No cambiar los valores bajo ningun concepto
var mariadb = require('mariasql');
var connection = new mariadb({
	host: 'localhost',
	user: 'root',
	password: 'gardiot',
	charset: 'utf8',
	db: 'gardiotDB'
});

module.exports = connection;