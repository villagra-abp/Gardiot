var connection = require('../config/connection');

var plant = {};

plant.getPlant = function(callback) {
  if(connection) {
    connection.query('SELECT * FROM Plant' , function (error, rows){
      if(error) {
        throw error;
      }
      else {
        callback(null, rows);
      }
    });
  }
}


plant.getPlantById = function(id, callback) {
	if (connection) {
		var sentence = 'SELECT * FROM Plant WHERE id = ' + id;
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
plant.insertPlant = function(data, callback) {
  if(connection) {
    var sentence = 'INSERT INTO Plant(scientificName, commonName, description, photo, 3DModel, category) ';
    sentence += 'values("'+data.scientificName+'", "'+data.commonName+'", "'+ data.description+'", "'+data.photo+'", "'+data.url3DModel+'", "'+data.category+'")';
    connection.query(sentence, function(error, result){
      if(error)
        throw error;
      else
        callback(null, result.affectedRows);
    });
  }
}
plant.updatePlant = function(data, callback) {
  if(connection) {
    commaCounter = 0;
    var sentence = 'UPDATE Plant SET ';
    if(data.scientificName){
      sentence += 'scientificName = "' + data.scientificName + '"' ;
      commaCounter++;
    }
    if(data.commonName) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='commonName ="' + data.commonName + '"';
      commaCounter++;
    }
    if(data.description) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='description ="' + data.description + '"';
      commaCounter++;
    }
    if(data.photo) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='photo ="' + data.photo + '"';
      commaCounter++;
    }
    if(data.url3DModel) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='3DModel ="' + data.url3DModel + '"';
      commaCounter++;
    }
    if(data.category) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='category ="' + data.category + '"';
      commaCounter++;
    }

    sentence += ' WHERE id= "' + data.id +'"';
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

plant.deletePlant = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM Plant WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				throw error;
			else
				callback(null, result.affectedRows);
		});
  }
}


module.exports = plant;
