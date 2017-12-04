var connection = require('./connection');

var tool = {};

tool.getTool = function(callback) {
  if(connection) {
    connection.query('SELECT * FROM Tool', function(error, rows) {
      if (error) {
        throw error;
      }
      else {
        callback(null, rows);
      }
    });
  }
}


tool.getToolById = function(id, callback) {
	if (connection) {
		var mariasql = 'SELECT * FROM Tool WHERE id = ' + id;
		connection.query(mariasql, function(error, row) {
			if (error) {
				throw error;
			}
			else {
				callback(null, row);
			}
		});
	}
}

tool.insertTool = function(data, callback) {
  if(connection) {
    var sentence = 'INSERT INTO Tool(name, photo) values("'+data.name+'", "'+data.photo+'")';
    connection.query(sentence, function(error, result){
      if(error)
        throw error;
      else
        callback(null, result.info.affectedRows);
    });
  }
}

tool.updateTool = function(data, callback) {
  if(connection) {
    var commaCounter=0;
    var sentence = 'UPDATE Tool SET ';
    if(data.name){
      sentence += 'name = "' + data.name + '"' ;
      commaCounter++;
    }
    if(data.photo){
      if(commaCounter>0)
        sentence +=', ';
      sentence += 'photo = "' + data.photo + '"';
      commaCounter++;
    }
    sentence += 'WHERE id = "' + data.id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				throw error;
			else
				callback(null, {"mensaje":"Actualizado"});
		});
	}
}

tool.deleteTool = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM Tool WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				throw error;
			else
				callback(null, result.info.affectedRows);
		});
  }
}


connection.end()
module.exports = tool;
