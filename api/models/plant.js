var connection = require('../config/connection');

var plant = {};

plant.getPlants = function(number, page, callback) {
  if(connection) {
    connection.query('SELECT * FROM Plant WHERE id BETWEEN ' + (page - 1) * number + ' AND ' + page * number , function (error, rows){
      if(error) 
        callback(error, null);
      else 
        callback(null, rows);
    });
  }
}


plant.getPlantById = function(id, callback) {
	if (connection) {
		var sentence = 'SELECT * FROM Plant WHERE id = ' + id;
		connection.query(sentence, function(error, row) {
			if (error) 
				callback(error, null);		
			else 
				callback(null, row);		
		});
	}
}

plant.getPlantsByFamily = function(id, callback) { //HAY QUE AFINAR MAS LOS CAMPOS A DEVOLVER
  if (connection) {
    var sentence = 'SELECT * FROM Plant, Family WHERE plant.family = family.id AND family.id = ' + id;
    connection.query(sentence, function(error, row) {
      if (error) 
        callback(error, null);    
      else 
        callback(null, row);    
    });
  }
}

plant.insertPlant = function(data, callback) {
  if(connection) {
    sql = 'INSERT INTO Plant SET ';
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
plant.updatePlant = function(data, callback) {
  if(connection) {   
    var sql = 'UPDATE Plant SET ';
    for (var key in data)
      if (typeof data[key]!== 'undefined' && key!= 'id') 
        sql += key + ' = "' + data[key] + '",';
    sql = sql.slice(0, -1);
    sql += ' WHERE id= "' + data.id +'"';
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

plant.deletePlant = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM Plant WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				callback(error, null);   
			else
				callback(null, result.affectedRows);
		});
  }
}


module.exports = plant;
