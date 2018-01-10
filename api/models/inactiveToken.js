var connection = require('../config/connection');
var jwt = require('jsonwebtoken');
var config = require('../config/main');

var inactiveToken = {};

inactiveToken.insertInactiveToken = function(token, callback) {
	if (connection) {
		var sql = 'INSERT INTO InactiveToken (token) VALUES("' + token + '")';
		connection.query(sql, function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, result.affectedRows);
		});
	}
}

inactiveToken.getInactiveTokenByToken = function(token, callback) {
	if (connection) {
		var sql = 'SELECT token FROM InactiveToken WHERE token = "' + token + '"';
		connection.query(sql, function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, result);
		});
	}
}
module.exports = inactiveToken;