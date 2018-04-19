var connection = require('../config/connection');

var family = {};

family.getFamilies = function(number, page, sort, callback) {
  if(connection) {
    let minPeak = (page - 1) * number;
    let order = '';
    if (sort.toUpperCase() === 'DESC')
      order = 'DESC';
    connection.query('SELECT * FROM Family ORDER BY name ' + order + ' LIMIT ' + minPeak  + ',' + number , function (error, rows){
      if(error)
        callback(error, null);
      else
        callback(null, rows);
    });
  }
}

family.getFamilyById = function(id, callback) {
	if (connection) {
		connection.query('SELECT * FROM Family WHERE id = ' + id, function(error, row) {
			if (error)
				callback(error, null);
			else
				callback(null, row);
		});
	}
}

family.getFamiliesNumber = function (callback) {
  if (connection) {
    connection.query('SELECT COUNT(*) as NUMFAMILIES FROM Family', function (error, number) {
      if (error) callback (error, null);
      else callback (null, number);
    });
  }
}

family.insertFamily = function(data, callback) {
  if(connection) {
    sql = 'INSERT INTO Family SET ';
    for (var key in data)
      if (typeof data[key]!== 'undefined')
        sql += key + ' = "' + data[key] + '",';
    sql = sql.slice(0, -1);
    connection.query(sql, function(error, result){
      if(error)
        callback(error, null);
      else
        callback(null, result.affectedRows);
    });
  }
}

family.updateFamily = function(data, id, callback) {
  if(connection) {
    var sql = 'UPDATE Family SET ';
    for (var key in data)
      if (typeof data[key]!== 'undefined')
        sql += key + ' = "' + data[key] + '",';
    sql = sql.slice(0, -1);
    sql += ' WHERE id= "' + id +'"';
    connection.query(sql, function(error, result) {
		if (error)
			callback(error, null);
		else{
    		if(result.affectedRows < 1)
  				callback(null, {"mensaje":"No existe"});
    		else
				callback(null, {"mensaje":"Actualizado"});
     	 }
	});
  }
}

family.deleteFamily = function(id, callback) {
  if(connection) {
    connection.query('DELETE FROM Family WHERE id = "' + id + '"', function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, result.affectedRows);
		});
  }
}

module.exports = family;
