var connection = require('../config/connection');

var country = {};

country.getCountry = function(callback) {
  if(connection) {
    connection.query('SELECT * FROM Country' , function (error, rows){
      if(error) {
        throw error;
      }
      else {
        callback(null, rows);
      }
    });
  }
}


country.getCountryById = function(id, callback) {
	if (connection) {
		var sentence = 'SELECT * FROM Country WHERE id = ' + id;
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

country.insertCountry = function(data, callback) {
  if(connection) {
    var sentence = 'INSERT INTO Country(name) values("'+data.name+'")';
    connection.query(sentence, function(error, result, fields){
      if(error)
        throw error;
      else
        callback(null, result.affectedRows);
    });
  }
}

country.updateCountry = function(data, callback) {
  if(connection) {
    commaCounter=0;
    var sentence =  'UPDATE Country SET ';
    if(data.name){
      sentence += 'name = "' + data.name + '"' ;
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

country.deleteCountry = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM Country WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				throw error;
			else
				callback(null, result.affectedRows);
		});
  }
}


module.exports = country;
