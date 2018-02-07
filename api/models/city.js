var connection = require('../config/connection');

var city = {};

city.getCity = function(callback) {
  if(connection) {
    connection.query('SELECT * FROM City' , function (error, rows){
      if(error) {
        throw error;
      }
      else {
        callback(null, rows);
      }
    });
  }
}


city.getCityById = function(id, callback) {
	if (connection) {
		var sentence = 'SELECT * FROM City WHERE id = ' + id;
		connection.query(sentence, function(error, row) {
			if (error) {
				throw error;
			}
			else {
				callback(null, row);
			}
		});
	}
}

city.insertCity = function(data, callback) {
  if(connection) {
    var sentence = 'INSERT INTO City(name, country) values("'+data.name+'","'+data.country+'")';
    connection.query(sentence, function(error, result, fields){
      if(error)
        throw error;
      else
        callback(null, result.affectedRows);
    });
  }
}

city.updateCity = function(data, callback) {
  if(connection) {
    commaCounter=0;
    var sentence =  'UPDATE City SET ';
    if(data.name){
      sentence += 'name = "' + data.name + '"' ;
      commaCounter++;
    }
    if(data.country) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='country ="' + data.country + '"';
      commaCounter++;
    }
    sentence += ' WHERE id = "' + data.id +'"';
    connection.query(sentence, function(error, result) {
			if (error){
				throw error;
      }
			else{
        if(result.affectedRows < 1){
          callback(null, {"mensaje":"No existe"});
        }else{
  				callback(null, {"mensaje":"Actualizado"});
        }
      }
		});
  }
}

city.deleteCity = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM City WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				throw error;
			else
				callback(null, result.affectedRows);
		});
  }
}


module.exports = city;
