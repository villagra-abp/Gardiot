var connection = require('./connection');

var myPlant = {};

myPlant.getMyPlant = function(callback) {
  if(connection) {
    connection.query('SELECT * FROM MyPlant' , function (error, rows){
      if(error) {
        throw error;
      }
      else {
        callback(null, rows);
      }
    });
  }
}


myPlant.getMyPlantById = function(id, callback) {
	if (connection) {
		var sentence = 'SELECT * FROM MyPlant WHERE id = ' + id;
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

myPlant.insertMyPlant = function(data, callback) {
  if(connection) {
    var sentence = 'INSERT INTO MyPlant(name, xCoordinate, yCoordinate, seed, number, plant, garden, soil) values("'+data.name+'", "'+data.xCoordinate+'", "'+data.yCoordinate+'", "'+data.seed+'", "'+data.number+'", "'+data.plant+'", "'+data.garden+'", "'+data.soil+'")';
    connection.query(sentence, function(error, result){
      if(error)
        throw error;
      else
        callback(null, result.info.affectedRows);
    });
  }
}

myPlant.updateMyPlant = function(data, callback) {
  if(connection) {
    commaCounter=0;
    var sentence =  'UPDATE MyPlant SET ';
    if(data.name){
      sentence += 'name = "' + data.name + '"' ;
      commaCounter++;
    }
    //console.log('data.description -> ' + data.description);
    if(data.description) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='description ="' + data.description + '"';
      commaCounter++;
    }
    sentence += ' WHERE id = "' + data.id +'"';
    connection.query(sentence, function(error, result) {
			if (error){
				throw error;
      }
			else{
        if(result.info.affectedRows < 1){
          callback(null, {"mensaje":"No existe"});
        }else{
  				callback(null, {"mensaje":"Actualizado"});
        }
      }
		});
  }
}

myPlant.deleteMyPlant = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM MyPlant WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				throw error;
			else
				callback(null, result.info.affectedRows);
		});
  }
}


connection.end()
module.exports = myPlant;
