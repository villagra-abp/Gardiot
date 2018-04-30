var connection = require('../config/connection');
var validator = require('validator');
var isASCII = require('../functions/isASCII');
var isEmail = require('isemail');

var finder = {};

finder.find = function(model, data, number, page, order, sort, callback) {
	if (connection) {
		let minPeak = (page - 1) * number;
		var sql = 'SELECT COUNT(*) OVER () AS num, Q.* FROM ' + model + ' Q ';

		let sqlParams = '';
		for (var key in data) {
			if (typeof data[key]!== 'undefined') {
				if (validator.isISO8601(data[key])) {
					if (key.toUpperCase().indexOf('INIT')!= -1)
						sqlParams += ' ' + key + ' >= ' + data[key] + ' AND';
					else if (key.toUpperCase().indexOf('FIN')!= -1)
						sqlParams += ' ' + key + ' <= ' + data[key] + ' AND';
					else
						sqlParams += ' ' + key + ' = ' + data[key] + ' AND';
				}
				else if (Number.isInteger(data[key]) || validator.isFloat(data[key])) {
					if (key.toUpperCase().indexOf('GT')!= -1)
						sqlParams += ' ' + key.slice(2) + ' >= ' + data[key] + ' AND';
					else if (key.toUpperCase().indexOf('LT')!= -1)
						sqlParams += ' ' + key.slice(2) + ' <= ' + data[key] + ' AND';
					else
						sqlParams += ' ' + key + ' = ' + data[key] + ' AND';
				}
				else if (isASCII(data[key]) || isEmail.validate(data[key]))
					sqlParams += ' ' + key + ' LIKE "%' + data[key] + '%" AND';
			}
		}
		if (Object.keys(data).length > 0 && sqlParams != '') {
			sql += ' WHERE ' + sqlParams;
			sql = sql.slice(0, -3); //Cut the last AND
		}	
		sql += ' ORDER BY ' + order + ' ';
		if(sort.toUpperCase() === 'DESC')
			sql += 'DESC ';
		sql += 'LIMIT ' + minPeak + ',' + number;
		console.log(sql);
		connection.query(sql, function(error, rows) {
			if (error)
				callback(error, null);
			else
				callback(null, rows);
		});
	}
}


module.exports = finder;
