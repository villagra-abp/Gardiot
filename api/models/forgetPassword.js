var connection = require('../config/connection');

var forgetPassword = {};

forgetPassword.insertForgetPasswordToken = function(id, token, callback) {
	if (connection) {
		var sql = 'INSERT INTO ForgetPasswordToken (userId, token) VALUES("' + id + '", "' + token + '")';
		connection.query(sql, function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, result.affectedRows);
		});
	}
}

forgetPassword.getUserByForgetPasswordToken = function(token, callback) {
	if (connection) {
		var sql = 'SELECT userId FROM ForgetPasswordToken WHERE token = "' + token + '"';
		connection.query(sql, function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, result);
		});
	}
}

forgetPassword.updateForgetPasswordToken = function(id, token, callback) {
	if (connection) {
		var sql = 'UPDATE ForgetPasswordToken SET token = "' + token + '" WHERE userId = "' + id + '"';
		connection.query(sql, function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, result.affectedRows);
		});
	}
}

forgetPassword.getForgetPasswordTokenByUser = function(user, callback) {
	if (connection) {
		var sql = 'SELECT token FROM ForgetPasswordToken WHERE userId = "' + user + '"';
		connection.query(sql, function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, result);
		});
	}
}

forgetPassword.deleteForgetPasswordTokenByUser = function (id, callback) {
	if (connection) {
		var sql = 'DELETE FROM ForgetPasswordToken WHERE userId = "' + id + '"';
		connection.query(sql, function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, result.affectedRows);
		});
	}
}