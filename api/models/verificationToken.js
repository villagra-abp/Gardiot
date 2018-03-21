var connection = require('../config/connection');

var verificationToken = {};

verificationToken.insertVerificationToken = function(id, token, callback) {
	if (connection) {
		var sql = 'INSERT INTO VerificationToken (userId, token) VALUES("' + id + '", "' + token + '")';
		connection.query(sql, function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, token);
		});
	}
}

verificationToken.getUserByVerificationToken = function(token, callback) {
	if (connection) {
		var sql = 'SELECT userId FROM VerificationToken WHERE token = "' + token + '"';
		connection.query(sql, function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, result);
		});
	}
}

verificationToken.getVerificationTokenByUser = function(user, callback) {
	if (connection) {
		var sql = 'SELECT token FROM VerificationToken WHERE userId = "' + user + '"';
		connection.query(sql, function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, result);
		});
	}
}

verificationToken.updateVerificationToken = function(id, token, callback) {
	if (connection) {
		var sql = 'UPDATE VerificationToken SET token = "' + token + '" WHERE userId = "' + id + '"';
		connection.query(sql, function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, result.affectedRows);
		});
	}
}

module.exports = verificationToken;