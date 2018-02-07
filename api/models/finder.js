var connection = require('../config/connection');

var finder = {};

finder.find = function(model, data, callback) {
	if (connection) {
		sql = 'SELECT * FROM ' + model + ' WHERE ';
		for (var key in data)
			if (data[key]!== 'undefined') 
				sql += ' ' + key + ' LIKE "%' + data[key] + '%",';
		sql = sql.slice(0, -1);
		connection.query(sql, function(error, rows) {
			if (error)
				callback(error, null);
			else
				callback(null, rows);
		});
	}
}


module.exports = finder;