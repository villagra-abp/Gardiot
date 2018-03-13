var connection = require('../config/connection');

var soil = {};

soil.getSoil = function(number, page, sort, callback) {
  if(connection) {
    let minPeak = (page - 1) * number;
    let orderSentence = '';
    if (sort.toUpperCase() === 'DESC')
      orderSentence = 'DESC';
    connection.query('SELECT * FROM Soil ORDER BY name ' + orderSentence + ' LIMIT ' + minPeak + ',' + number , function (error, rows){
      if(error) 
        callback (error, null);
      else 
        callback(null, rows);
    });
  }
}

soil.getSoilNumber = function (callback) {
  if (connection) {
    connection.query('SELECT COUNT(*) AS number FROM Soil', function (error, number) {
      if (error) callback (error, null);
      else callback (null, number);
    });
  }
}

soil.getSoilById = function(id, callback) {
	if (connection) {
		connection.query('SELECT name, description, texture FROM Soil WHERE id = ' + id, function(error, row) {
			if (error) 
				callback (error, null);		
			else 
				callback(null, row);		
		});
	}
}

/*soil.getSoilSearch = function(name, callback) {
	if (connection) {
		var sentence = 'SELECT * from Soil where name like "%'+name+'%" order by name ASC';
		connection.query(sentence, function(error, row) {
			if (error) {
				throw error;
			}
			else {
				callback(null, row);
			}
		});
	}
}*/

soil.insertSoil = function(data, callback) {
  if(connection) {
    sql = 'INSERT INTO Soil SET ';
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

soil.updateSoil = function(data, id, callback) {
   if(connection) {
    var sql = 'UPDATE Soil SET ';
    for (var key in data)
      if (typeof data[key]!== 'undefined')
        sql += key + ' = "' + data[key] + '",';
    sql = sql.slice(0, -1);
    sql += ' WHERE id = ' + id;
    connection.query(sql, function(error, result) {
      if (error)
        callback(error, null);
      else{
        callback(null, result.affectedRows);
      }
    });
  }
}

soil.deleteSoil = function(id, callback) {
  if(connection) {
    connection.query('DELETE FROM Soil WHERE id = ' + id, function(error, result) {
      if (error)
        callback(error, null);
      else
        callback(null, result.affectedRows);
    });
  }
}


module.exports = soil;
