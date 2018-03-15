var connection = require('../config/connection');

var product = {};

product.getProduct = function(number, page, sort, callback) {
	if(connection) {
	    let minPeak = (page - 1) * number;
	    let orderSentence = '';
	    if (sort.toUpperCase() === 'DESC')
	      orderSentence = 'DESC';
	    connection.query('SELECT * FROM Product ORDER BY name ' + orderSentence + ' LIMIT ' + minPeak + ',' + number , function (error, rows){
	      if(error)
	        callback (error, null);
	      else
	        callback(null, rows);
	    });
  	}
}

product.getProductsNumber = function (callback) {
  if (connection) {
    connection.query('SELECT COUNT(*) AS NUMPRODUCTS FROM Product', function (error, number) {
      if (error) callback (error, null);
      else callback (null, number);
    });
  }
}

product.getProductById = function(id, callback) {
	if (connection) {
		connection.query('SELECT name, type, description FROM Product WHERE id = ' + id, function(error, row) {
			if (error)
				callback (error, null);
			else
				callback(null, row);
		});
	}
}

product.getProductsByType = function(number, page, sort, type, callback) {
	if (connection) {
		let minPeak = (page - 1) * number;
	    let orderSentence = '';
	    if (sort.toUpperCase() === 'DESC')
	      orderSentence = 'DESC';
		connection.query('SELECT COUNT(*) OVER () AS NUMPRODUCTS, P.* FROM Product P WHERE type = "' + type + '" ORDER BY name ' + orderSentence + ' LIMIT ' + minPeak + ',' + number , function(error, row) {
			if (error)
				callback (error, null);
			else
				callback(null, row);
		});
	}
}


// búsqueda por NOMBRE
/*product.getProductSearch = function(name, callback) {
	if (connection) {
		var sentence = 'SELECT * from Product  where  name like "%'+name+'%" order by name ASC';
;
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
// búsqueda por precio MENOR que
product.getProductFilterLessThan = function(price, callback) {
	if (connection) {
		var sentence = 'SELECT * from Product where price <='+price+' order by price DESC';
;
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
// búsqueda por precio MAYOR que
product.getProductFilterMoreThan = function(price, callback) {
	if (connection) {
		var sentence = 'SELECT * from Product where price >='+price+' order by price DESC';
;
		connection.query(sentence, function(error, row) {
			if (error) {
				throw error;
			}
			else {
				callback(null, row);
			}
		});
	}
}*/

product.insertProduct = function(data, callback) {
  if(connection) {
    sql = 'INSERT INTO Product SET ';
    for (var key in data)
      if (typeof data[key]!== 'undefined' && data[key]!='undefined')
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

product.updateProduct = function(data, id, callback) {
  if(connection) {
    var sql = 'UPDATE Product SET ';
    for (var key in data)
      if (typeof data[key]!== 'undefined' && data[key]!='undefined')
        sql += key + ' = "' + data[key] + '",';
    sql = sql.slice(0, -1);
    sql += ' WHERE id = ' + id;
    connection.query(sql, function(error, result) {
      if (error)
        callback(error, null);
      else{
        callback(null, result.affectedRows);
      }
    });
  }
}

product.deleteProduct = function(id, callback) {
  if(connection) {
    connection.query('DELETE FROM Product WHERE id = ' + id, function(error, result) {
      if (error)
        callback(error, null);
      else
        callback(null, result.affectedRows);
    });
  }
}

module.exports = product;
