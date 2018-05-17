var connection = require('../config/connection');
var validator = require('validator');
var isASCII = require('../functions/isASCII');
var isEmail = require('isemail');

var skeleton = {
	PLANT: {
		SELECT: ', Family.name AS familyName',
		FROM: 'Family, Plant',
		WHERE: ' Family.id = Q.family AND'
	},
	USER: {
		SELECT: '',
		FROM: 'User',
		WHERE: ''
	},
	PRODUCT: {
		SELECT: '',
		FROM: 'Product',
		WHERE: ''
	},
	TREATMENT: {
		SELECT: '',
		FROM: 'Treatment',
		WHERE: ''
	},
	FEED: {
		SELECT: '',
		FROM: 'Feed',
		WHERE: ''
	}
};

var finder = {};

finder.find = function(model, data, number, page, order, sort, callback) {
	if (connection) {
		let minPeak = (page - 1) * number;
		var sql = 'SELECT COUNT(*) OVER () AS num, Q.* ' + skeleton[model.toUpperCase()]['SELECT'] + ' FROM ' + skeleton[model.toUpperCase()]['FROM'] + ' Q ';
		console.log(data);
		let sqlParams = '';
		for (var key in data) {
			if (typeof data[key]!== 'undefined') {
				if (validator.isISO8601(data[key])) {
					if (key.toUpperCase().indexOf('INIT')!= -1)
						sqlParams += ' DAYOFYEAR(' + key + ') >= DAYOFYEAR("' + data[key] + '") AND';
					else if (key.toUpperCase().indexOf('FIN')!= -1)
						sqlParams += ' DAYOFYEAR(' + key + ') <= DAYOFYEAR("' + data[key] + '") AND';
					else
						sqlParams += ' DAYOFYEAR(' + key + ') = DAYOFYEAR("' + data[key] + '") AND';
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
			if(skeleton[model.toUpperCase()]['WHERE'] == '')
				sql = sql.slice(0, -3); //Cut the last AND
		}else{
			if(skeleton[model.toUpperCase()]['WHERE'] != '')
			sql += ' WHERE ';
		}

		sql += skeleton[model.toUpperCase()]['WHERE'];

		if(skeleton[model.toUpperCase()]['WHERE'] != ''){
			sql = sql.slice(0, -3); //Cut the last AND
		}

		sql += ' ORDER BY ' + order + ' ';
		if(sort.toUpperCase() === 'DESC')
			sql += 'DESC ';
		sql += 'LIMIT ' + minPeak + ',' + number;
		if (sqlParams != '') {
			connection.query(sql, function(error, rows) {

				if (error)
					callback(error, null);
				else
					callback(null, rows);
			});
		}
		else 
			callback (null, null);		
	}
}


module.exports = finder;
