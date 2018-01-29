var connection = require('../config/connection'); //Carga la conexion con la BD

var category = {};

category.getCategory = function(callback) { 
  if(connection) { //Comprueba que hay conexion con la BD
    connection.query('SELECT * FROM Category' , function (error, rows){ //Realiza la query
      if(error) {
        callback(error, null); //El callback es la respuesta que devuelve a la ruta. En la ruta es el function (error, data)
      }
      else {
        callback(null, rows); 
      }
    });
  }
}


category.getCategoryById = function(id, callback) {
	if (connection) {
		var sentence = 'SELECT * FROM Category WHERE id = ' + id; //Si fuese un varchar habria que poner "" a la variable. Mirar modelo de usuario como referencia
		connection.query(sentence, function(error, row) {
			if (error) {
				callback(error, null);
			}
			else {
				callback(null, row);
			}
		});
	}
}

category.insertCategory = function(data, callback) {
  if(connection) {
    if (!data.name) //Hay que comprobar la existencia de datos. Si se permite null y el valor no es pasado desde la ruta, pues se fuerza a null
    if (!data.description)
      data.description = null;
    var sentence = 'INSERT INTO Category(name, description) VALUES("'+data.name+'", "'+data.description+'")';
    connection.query(sentence, function(error, result, fields){
      if(error)
        callback(error, null);
      else
        callback(null, result.insertId); //Si en la BBDD es autoincremental, poned insertId. Si no lo es, poned affectedRows
    });
  }
}

category.updateCategory = function(data, callback) {
  if(connection) {
    commaCounter=0;
    var sql =  'UPDATE Category SET '; //La sentencia se construye incrementalmente según si se pasan o no los datos
    if(data.name)
      sql += 'name = "' + data.name + '", ' ;    
    if(data.description) 
      sql +='description ="' + data.description + '", ';

    sql = sql.slice(0, -1); //Borra la ultima coma    
    sql += ' WHERE id = "' + data.id +'"';
    connection.query(sql, function(error, result) {
			if (error){
				callback(error, null);
      }
			else{
        callback (null, result.affectedRows);
      }
		});
  }
}

category.deleteCategory = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM Category WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, result.affectedRows);
		});
  }
}


module.exports = category;
