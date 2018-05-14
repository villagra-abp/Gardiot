var connection = require('../config/connection');
var bcrypt = require('bcryptjs');

var user = {};

user.getUser = function(number, page, order, sort, callback) {
	if (connection) {
	    let minPeak = (page - 1) * number;
	    let orderSentence = '';
	    let orderByParam = '';
	    if (sort.toUpperCase() === 'DESC')
	      orderSentence = 'DESC';
	    if (order === 'name' || order === 'lastName' || order === 'birthDate' || order === 'city')
	      orderByParam = ' ORDER BY ' + order + ' ' + orderSentence;
		connection.query('SELECT id, name, lastName, birthDate, active, city, admin FROM User ' + orderByParam + ' LIMIT ' + minPeak + ',' + number, function(error, rows) {
			if (error)
				callback(error, null);
			else
				callback(null, rows);
		});
	}
}

user.getUserById = function(id, callback) {
	if (connection) {
		var mariasql = 'SELECT * FROM User WHERE id = "' + id + '"';
		connection.query(mariasql, function(error, row) {
			if (error)
				callback(error, null);
			else
				callback(null, row);
		});
	}
}

user.getUsersNumber = function (callback) {
  if (connection) {
    connection.query('SELECT COUNT(*) AS NUMUSERS FROM User', function (error, number) {
      if (error) callback (error, null);
      else callback (null, number);
    });
  }
}

user.insertUser = function(userData, callback) {
	if (connection) {
		var mariasql = 'INSERT INTO User SET ';
		for (var key in userData)
      		if (typeof userData[key]!== 'undefined') {
        		mariasql += key + ' = "' + userData[key] + '",';
        		if (key == 'googleId' || key == 'facebookId' || key == 'admin')
        			mariasql += 'active = 1,';
      		}
		mariasql = mariasql.slice(0, -1);
		connection.query(mariasql, function(error, result) {
			if (error)
				callback(error, null);
			else {
				connection.query('INSERT INTO UserFeed (feed, user) SELECT id, "' + userData.id + '" FROM Feed', function (error, rows) {
					if (error)
						callback (error, null);
					else
						callback(null, result.affectedRows);
				})
			}
		});
	}
}

user.updateUser = function(userData, callback) {
	if (connection) {
		var mariasql = 'UPDATE User SET ';
		for (var key in userData)
      		if (typeof userData[key]!== 'undefined' && key!='oldId')
        		mariasql += key + ' = "' + userData[key] + '",';
		mariasql = mariasql.slice(0, -1);
		mariasql += 'WHERE id = "' + userData.oldId + '"';
		connection.query(mariasql, function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, result.affectedRows);
		});
	}
}

user.updatePassword = function (email, password, callback) {
	if (connection) {
		connection.query('UPDATE User SET password = "' + password + '" WHERE id = "' + email + '"', function (error, result) {
			if (error) callback(error, null);
			else callback (null, result.affectedRows);
		});
	}
}

user.deleteUser = function(id, callback) {
	if (connection) {
		connection.query('DELETE FROM User WHERE id = "' + id + '"', function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, result.affectedRows);
		});
	}
}

user.blockUser = function(id, callback) {
	if (connection) {
		var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
		connection.query('UPDATE User SET dateDelete = "' + utc + '" WHERE id = "' + id + '"', function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, result.affectedRows);
		});
	}
}

user.activateUser = function(id, callback) {
	if (connection) {
		connection.query('UPDATE User SET active = 1 WHERE id = "' + id + '"', function(error, result) {
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

user.registerConnection = function (email, callback) {
	if (connection) {
		connection.query('UPDATE User SET lastConnection = NOW() WHERE id = "' + email + '"', function (error, result) {
			if (error)
				callback (error, null);
			else
				callback (null, result.affectedRows);
		});
	}
}

module.exports = user;
