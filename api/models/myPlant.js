var connection = require('../config/connection');

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
        callback(null, result.affectedRows);
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
    if(data.xCoordinate) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='xCoordinate ="' + data.xCoordinate + '"';
      commaCounter++;
    }
    if(data.yCoordinate) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='yCoordinate ="' + data.yCoordinate + '"';
      commaCounter++;
    }
    if(data.seed) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='seed ="' + data.seed + '"';
      commaCounter++;
    }
    if(data.number) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='number ="' + data.number + '"';
      commaCounter++;
    }
    if(data.plant) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='plant ="' + data.plant + '"';
      commaCounter++;
    }
    if(data.garden) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='garden ="' + data.garden + '"';
      commaCounter++;
    }
    if(data.soil) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='soil ="' + data.soil + '"';
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

myPlant.deleteMyPlant = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM MyPlant WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				throw error;
			else
				callback(null, result.affectedRows);
		});
  }
}


module.exports = myPlant;
