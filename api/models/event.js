var connection = require('../config/connection');

var event = {};

event.getEvent = function(callback) {
  if(connection) {
    connection.query('SELECT * FROM Event' , function (error, rows){
      if(error) {
        throw error;
      }
      else {
        callback(null, rows);
      }
    });
  }
}


event.getEventById = function(id, callback) {
	if (connection) {
		var sentence = 'SELECT * FROM Event WHERE id = ' + id;
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

event.insertEvent = function(data, callback) {
  if(connection) {
    var sentence = 'INSERT INTO Event(name, description, done) values("'+data.name+'", "'+data.description+'", "'+data.done+'")';
    connection.query(sentence, function(error, result){
      if(error)
        throw error;
      else
        callback(null, result.info.affectedRows);
    });
  }
}

event.updateEvent = function(data, callback) {
  if(connection) {
    commaCounter=0;
    var sentence =  'UPDATE Event SET ';
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
    if(data.done) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='done ="' + data.done + '"';
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

event.deleteEvent = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM Event WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				throw error;
			else
				callback(null, result.info.affectedRows);
		});
  }
}


module.exports = event;
