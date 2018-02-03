var connection = require('../config/connection');

var treatment = {};

treatment.getTreatment = function(callback) {
  if(connection) {
    connection.query('SELECT * FROM Treatment' , function (error, rows){
      if(error) {
        throw error;
      }
      else {
        callback(null, rows);
      }
    });
  }
}

treatment.getTreatmentsByPlant = function(plant, callback) {
  if(connection) {
    var sentence = 'SELECT Treatment.id, Treatment.name, Treatment.description';
    sentence += ' FROM Plant INNER JOIN TreatmentPlant ON TreatmentPlant.plant=Plant.id ';
    sentence += 'INNER JOIN Treatment ON Treatment.id=TreatmentPlant.plant where Plant.id=' + plant;
    connection.query(sentence, function (error, rows){
      if(error) {
        throw error;
      }
      else {
        callback(null, rows);
      }
    });
  }
}

treatment.getTreatmentsByGarden = function(garden, callback) {
  if(connection) {
    var sentence = 'SELECT Treatment.id, Treatment.name, Treatment.description FROM Garden';
    sentence += ' INNER JOIN MyPlant on MyPlant.garden=Garden.id INNER JOIN Plant';
    sentence += ' ON Plant.id=MyPlant.plant INNER JOIN TreatmentPlant ON TreatmentPlant.plant=Plant.id';
    sentence += ' INNER JOIN Treatment ON Treatment.id=TreatmentPlant.plant where Garden.id=' + garden;
    connection.query(sentence , function (error, rows){
      if(error) {
        throw error;
      }
      else {
        callback(null, rows);
      }
    });
  }
}


treatment.getTreatmentById = function(id, callback) {
	if (connection) {
		var sentence = 'SELECT * FROM Treatment WHERE id = ' + id;
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

treatment.insertTreatment = function(data, callback) {
  if(connection) {
    var sentence = 'INSERT INTO Treatment(name, description) values("'+data.name+'", "'+data.description+'")';
    connection.query(sentence, function(error, result){
      if(error)
        throw error;
      else
        callback(null, result.affectedRows);
    });
  }
}

treatment.updateTreatment = function(data, callback) {
  if(connection) {
    commaCounter=0;
    var sentence =  'UPDATE Treatment SET ';
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

treatment.deleteTreatment = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM Treatment WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				throw error;
			else
				callback(null, result.affectedRows);
		});
  }
}


module.exports = treatment;
