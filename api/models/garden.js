var connection = require('../config/connection');

var garden = {};

garden.getGarden = function(callback) {
  if(connection) {
    connection.query('SELECT * FROM Garden' , function (error, rows){
      if(error) {
        throw error;
      }
      else {
        callback(null, rows);
      }
    });
  }
}


garden.getGardenById = function(id, callback) {
	if (connection) {
		var sentence = 'SELECT * FROM Garden WHERE id = ' + id;
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

garden.insertGarden = function(data, callback) {
  if(connection) {
    var sentence = 'INSERT INTO Garden(title, width, lenght, longitude, latitude,soil, user, city) values("'+data.title+'", "'+data.width+'", "'+data.length+'", "'+data.longitude+'", "'+data.latitude+'", "'+data.soil+'", "'+data.user+'", "'+data.city+'")';

    connection.query(sentence, function(error, result){
      if(error)
        throw error;
      else
        callback(null, result.affectedRows);
    });
  }
}

garden.updateGarden = function(data, callback) {
  if(connection) {
    commaCounter=0;
    var sentence =  'UPDATE Garden SET ';
    if(data.title){
      sentence += 'title = "' + data.title + '"' ;
      commaCounter++;
    }
    
    if(data.width) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='width ="' + data.width + '"';
      commaCounter++;
    }
    if(data.length) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='lenght ="' + data.length + '"';
      commaCounter++;
    }
    if(data.longitude) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='longitude ="' + data.longitude + '"';
      commaCounter++;
    }
    if(data.latitude) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='latitude ="' + data.latitude + '"';
      commaCounter++;
    }
    if(data.soil) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='soil ="' + data.soil + '"';
      commaCounter++;
    }
    if(data.user) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='user ="' + data.user + '"';
      commaCounter++;
    }
    if(data.city) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='city ="' + data.city + '"';
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

garden.deleteGarden = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM Garden WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				throw error;
			else
				callback(null, result.affectedRows);
		});
  }
}


module.exports = garden;
