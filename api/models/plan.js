var connection = require('../config/connection');

var plan = {};

plan.getPlan = function(callback) {
  if(connection) {
    connection.query('SELECT * FROM Plan' , function (error, rows){
      if(error) {
        throw error;
      }
      else {
        callback(null, rows);
      }
    });
  }
}


plan.getPlanById = function(id, callback) {
	if (connection) {
		var sentence = 'SELECT * FROM Plan WHERE id = "' + id + '"';
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

plan.insertPlan = function(data, callback) {
  if(connection) {
    var sentence = 'INSERT INTO Plan(id, description, price) values("'+data.id+'", "'+data.description+'", "'+data.price+'")';
    connection.query(sentence, function(error, result, fields){
      if(error)
        throw error;
      else
        callback(null, result.affectedRows);
    });
  }
}

plan.updatePlan = function(data, callback) {
  if(connection) {
    commaCounter=0;
    var sentence =  'UPDATE Plan SET ';
    if(data.description){
      sentence += 'description = "' + data.description + '"' ;
      commaCounter++;
    }
    
    if(data.price) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='price =' + data.price;
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

plan.deletePlan = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM Plan WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				throw error;
			else
				callback(null, result.affectedRows);
		});
  }
}


module.exports = plan;
