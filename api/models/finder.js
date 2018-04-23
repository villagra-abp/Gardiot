var connection = require('../config/connection');
var validator = require('validator');
var isASCII = require('../functions/isASCII');
var isEmail = require('isemail');

var finder = {};

finder.find = function(model, data, number, page, order, sort, callback) {
	if (connection) {
		let minPeak = (page - 1) * number;
		var sql = 'SELECT COUNT(*) OVER () AS num, Q.* FROM ' + model + ' Q ';

		if (Object.keys(data).length > 0)
			sql += ' WHERE ';
		for (var key in data) {
			if (typeof data[key]!== 'undefined') {
				if (validator.isISO8601(data[key])) {
					if (key.toUpperCase().indexOf('INIT')!= -1)
						sql += ' ' + key + ' >= ' + data[key] + ' AND';
					else if (key.toUpperCase().indexOf('FIN')!= -1)
						sql += ' ' + key + ' <= ' + data[key] + ' AND';
					else
						sql += ' ' + key + ' = ' + data[key] + ' AND';
				}
				else if (Number.isInteger(data[key]) || validator.isFloat(data[key])) {
					if (key.toUpperCase().indexOf('GT')!= -1)
						sql += ' ' + key.slice(2) + ' >= ' + data[key] + ' AND';
					else if (key.toUpperCase().indexOf('LT')!= -1)
						sql += ' ' + key.slice(2) + ' <= ' + data[key] + ' AND';
					else
						sql += ' ' + key + ' = ' + data[key] + ' AND';
				}
				else if (isASCII(data[key]) || isEmail.validate(data[key]))
					sql += ' ' + key + ' LIKE "%' + data[key] + '%" AND';
			}
		}
		if (Object.keys(data).length > 0)
			sql = sql.slice(0, -3); //Cut the last AND
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
	console.log(sql);
}


module.exports = finder;
