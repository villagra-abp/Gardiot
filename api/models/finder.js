var connection = require('../config/connection');

var finder = {};

finder.find = function(model, data, number, page, order, sort, callback) {
	if (connection) {
		let minPeak = (page - 1) * number;
		let paso = false;
		sql = 'SELECT COUNT(*) OVER () AS number, Q.* FROM ' + model + ' Q ';
		for (var key in data)
			if (typeof data[key]!== 'undefined') {
				if (!paso) { paso = true; sql += ' WHERE '; }
				sql += ' ' + key + ' LIKE "%' + data[key] + '%",';
			}
		sql = sql.slice(0, -1);
		sql += ' ORDER BY ' + order + ' ';
		if(sort.toUpperCase() === 'DESC')
			sql += 'DESC ';
		sql += 'LIMIT ' + minPeak + ',' + number;
		connection.query(sql, function(error, rows) {
			if (error)
				callback(error, null);
			else
				callback(null, rows);
		});
	}
}


module.exports = finder;