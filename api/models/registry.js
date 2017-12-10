var connection = require('./connection');

var registry = {};

registry.getRegistry = function(callback) {
  if(connection) {
    connection.query('SELECT * FROM Registry' , function (error, rows){
      if(error) {
        throw error;
      }
      else {
        callback(null, rows);
      }
    });
  }
}


registry.getRegistryById = function(id, callback) {
	if (connection) {
		var sentence = 'SELECT * FROM Registry WHERE id = ' + id;
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

registry.insertRegistry = function(data, callback) {
  if(connection) {
    var sentence = 'INSERT INTO Registry(name, date, event) values("'+data.name+'", "'+data.date+'", "'+data.event+'")';
    connection.query(sentence, function(error, result){
      if(error)
        throw error;
      else
        callback(null, result.info.affectedRows);
    });
  }
}

registry.updateRegistry = function(data, callback) {
  if(connection) {
    commaCounter=0;
    var sentence =  'UPDATE Registry SET ';
    if(data.name){
      sentence += 'name = "' + data.name + '"' ;
      commaCounter++;
    }
    //console.log('data.description -> ' + data.description);
    if(data.date) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='date ="' + data.date + '"';
      commaCounter++;
    }
    if(data.event) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='event ="' + data.event + '"';
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

registry.deleteRegistry = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM Registry WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				throw error;
			else
				callback(null, result.info.affectedRows);
		});
  }
}


connection.end()
module.exports = registry;
