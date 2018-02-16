var connection = require('../config/connection');

var feed = {};

feed.getFeed = function(callback) {
  if(connection) {
    connection.query('SELECT * FROM Feed' , function (error, rows){
      if(error) {
        throw error;
      }
      else {
        callback(null, rows);
      }
    });
  }
}


feed.getFeedById = function(id, callback) {
	if (connection) {
		var sentence = 'SELECT * FROM Feed WHERE id = ' + id;
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

feed.getFeedSearch = function(name, callback) {
	if (connection) {
		var sentence = 'SELECT * from Feed where name like "%'+name+'%" order by name ASC';
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

feed.insertFeed = function(data, callback) {
  if(connection) {
    var sentence = 'INSERT INTO Feed(name, text, date) values("'+data.name+'", "'+data.text+'", "'+data.date+'")';
    connection.query(sentence, function(error, result){
      if(error)
        throw error;
      else
        callback(null, result.affectedRows);
    });
  }
}

feed.updateFeed = function(data, callback) {
  if(connection) {
    commaCounter=0;
    var sentence =  'UPDATE Feed SET ';
    if(data.name){
      sentence += 'name = "' + data.name + '"' ;
      commaCounter++;
    }

    if(data.text) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='text ="' + data.text + '"';
      commaCounter++;
    }
    if(data.date) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='date ="' + data.date + '"';
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

feed.deleteFeed = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM Feed WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				throw error;
			else
				callback(null, result.affectedRows);
		});
  }
}


module.exports = feed;
