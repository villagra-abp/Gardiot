var connection = require('../config/connection');

var product = {};

product.getProduct = function(callback) {
  if(connection) {
    connection.query('SELECT * FROM Product', function(error, rows) {
      if (error) {
        throw error;
      }
      else {
        callback(null, rows);
      }
    });
  }
}

product.getProductById = function(id, callback) {
	if (connection) {
		var sentence = 'SELECT * FROM Product WHERE id = ' + id;
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

product.insertProduct = function(data, callback) {
  if(connection) {
    var sentence = 'INSERT INTO Product(name, price) values("'+data.name+'", "'+data.price+'")';
    connection.query(sentence, function(error, result){
      if(error)
        throw error;
      else
        callback(null, result.affectedRows);
    });
  }
}

product.updateProduct = function(data, callback) {
  if(connection) {
    commaCounter=0;
    var sentence =  'UPDATE Product SET ';
    if(data.name){
      sentence += 'name = "' + data.name + '"' ;
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

product.deleteProduct = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM Product WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				throw error;
			else
				callback(null, result.affectedRows);
		});
  }
}

module.exports = product;
