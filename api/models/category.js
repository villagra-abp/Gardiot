var connection = require('../config/connection');

var category = {};

category.getCategory = function(callback) {
  if(connection) {
    connection.query('SELECT * FROM Category' , function (error, rows){
      if(error) {
        throw error;
      }
      else {
        callback(null, rows);
      }
    });
  }
}


category.getCategoryById = function(id, callback) {
	if (connection) {
		var sentence = 'SELECT * FROM Category WHERE id = ' + id;
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

category.insertCategory = function(data, callback) {
  if(connection) {
    var sentence = 'INSERT INTO Category(name, description) values("'+data.name+'", "'+data.description+'")';
    connection.query(sentence, function(error, result, fields){
      if(error)
        throw error;
      else
        callback(null, result.affectedRows);
    });
  }
}

category.updateCategory = function(data, callback) {
  if(connection) {
    commaCounter=0;
    var sentence =  'UPDATE Category SET ';
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

category.deleteCategory = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM Category WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				throw error;
			else
				callback(null, result.affectedRows);
		});
  }
}


module.exports = category;
