var connection = require('../config/connection');

var soil = {};

soil.getSoil = function(callback) {
  if(connection) {
    connection.query('SELECT * FROM Soil' , function (error, rows){
      if(error) {
        throw error;
      }
      else {
        callback(null, rows);
      }
    });
  }
}


soil.getSoilById = function(id, callback) {
	if (connection) {
		var sentence = 'SELECT * FROM Soil WHERE id = ' + id;
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

soil.insertSoil = function(data, callback) {
  if(connection) {
    var sentence = 'INSERT INTO Soil(name, description, texture) values("'+data.name+'", "'+data.description+'", "'+data.texture+'")';
    connection.query(sentence, function(error, result){
      if(error)
        throw error;
      else
        callback(null, result.affectedRows);
    });
  }
}

soil.updateSoil = function(data, callback) {
  if(connection) {
    commaCounter=0;
    var sentence =  'UPDATE Soil SET ';
    if(data.name){
      sentence += 'name = "' + data.name + '"' ;
      commaCounter++;
    }
    
    if(data.description) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='description ="' + data.description + '"';
      commaCounter++;
    }
    if(data.texture) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='texture ="' + data.texture + '"';
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

soil.deleteSoil = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM Soil WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				throw error;
			else
				callback(null, result.affectedRows);
		});
  }
}


module.exports = soil;
