//No cambiar los valores bajo ningun concepto
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'gardior',
	charset: 'utf8',
	database: 'gardiotDB'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});

module.exports = connection;
