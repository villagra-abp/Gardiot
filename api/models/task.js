var connection = require('../config/connection');
var dateFormat = require('../functions/dateFormatter');

var task = {};

task.getMyTasksForToday = function (number, page, user, callback) {
	if (connection) {
		let minPeak = (page - 1) * number;
		let TodayDate = new Date();
		let year = TodayDate.getFullYear();
		let month = TodayDate.getMonth() + 1;
		let day = TodayDate.getDate();
		let rightDate = '' + year + '-' + month + '-' + day;
		connection.query('SELECT Treatment.id AS treatment, Treatment.name, Plant.commonName, MyPlant.id AS myplant, Plant.id AS plant, MyPlant.name, Garden.title FROM User, Garden, MyPlant, Plant, Task, TreatmentPlant, Treatment WHERE User.id = Garden.user AND Garden.id = MyPlant.garden AND MyPlant.id = Task.myPlant AND Task.treatmentPlant = TreatmentPlant.treatment AND Task.tPlant = TreatmentPlant.plant AND TreatmentPlant.treatment = Treatment.id AND TreatmentPlant.plant = Plant.id AND User.id = "' + user + '" AND Task.date = "' + rightDate + '" ORDER BY Plant.commonName LIMIT ' + minPeak + ',' + number, function(error, row) {
			if (error)
				callback(error, null);
			else
				callback(null, row);
		});
	}
}

task.getMyTasksByDate = function (number, page, user, date, callback) {
	if (connection) {
		connection.query('SELECT Treatment.id AS treatment, Treatment.name, Plant.commonName, MyPlant.id AS myplant, Plant.id AS plant, MyPlant.name, Garden.title FROM User, Garden, MyPlant, Plant, Task, TreatmentPlant, Treatment WHERE User.id = Garden.user AND Garden.id = MyPlant.garden AND MyPlant.id = Task.myPlant AND Task.treatmentPlant = TreatmentPlant.treatment AND Task.tPlant = TreatmentPlant.plant AND TreatmentPlant.treatment = Treatment.id AND TreatmentPlant.plant = Plant.id AND User.id = "' + user + '" AND Task.date = "' + date + '" ORDER BY Plant.commonName LIMIT ' + minPeak + ',' + number, function(error, row) {
			if (error)
				callback(error, null);
			else
				callback(null, row);
		});
	}
}

task.getMyTasksByMonth = function (user, dates, callback) {
	if (connection) {
		let dateM=[], month=[], year=[];
		console.log(dates);
		for(let i=0; i<dates.length; i++){
			dateM[i]=new Date(dates[i]);
			month[i] = dateM[i].getMonth() + 1;
			year[i] = dateM[i].getFullYear();
		}
		let prequery='SELECT Treatment.name, Plant.commonName, MyPlant.name AS namemyplant, Garden.title, Task.* FROM User, Garden, MyPlant, Plant, Task, TreatmentPlant, Treatment WHERE User.id = Garden.user AND Garden.id = MyPlant.garden AND MyPlant.id = Task.myPlant AND Task.treatmentPlant = TreatmentPlant.treatment AND Task.tPlant = TreatmentPlant.plant AND TreatmentPlant.treatment = Treatment.id AND TreatmentPlant.plant = Plant.id AND User.id = "' + user + '" AND (';
		for(let i=0; i<dates.length; i++){
			prequery+='MONTH(Task.date) = ' + month[i] + ' AND YEAR(Task.date) = ' + year[i] + ' OR ';
		}
		prequery = prequery.substring(0, prequery.length -3);
		prequery+=') ORDER BY Task.date';

		connection.query(prequery, function(error, row) {
			if (error)
				callback(error, null);
			else {
				if (row.length == 0) {
					let query='SELECT tPlant, myPlant, treatmentPlant, MAX(date) AS date, frequency FROM Task, TreatmentPlant WHERE TreatmentPlant.treatment = Task.treatmentPlant AND frequency IS NOT NULL AND (';
					for(let i=0; i<dates.length; i++){
						query += 'MONTH(date) = MONTH("' + dateFormat(month[i]) +'") AND YEAR(date) = YEAR("' + dateFormat(month[i]) + '") OR ';
					}
					query = query.substring(0, query.length -3);
					query += ') GROUP BY tPlant, myPlant, treatmentPlant';
					connection.query(query, function (error, rows) {
						if (error)
						  callback (error, null);
						else {
							var sql = 'INSERT INTO Task (tPlant, treatmentPlant, myPlant, mPlant, date) VALUES ';
							var sqlBase = '';
							var monthRequested = new Date(date);
							for (var i = 0; typeof rows[i]!== 'undefined'; i++) {
								sqlBase = '(' + rows[i].tPlant + ',' + rows[i].treatmentPlant + ',' + rows[i].myPlant + ',' + rows[i].tPlant;
								var next = new Date(rows[i].date);
								next.setDate(next.getDate() + rows[i].frequency);
								while (monthRequested.getMonth() + 1 >= next.getMonth()) {
									sql += sqlBase + ',"' + dateFormat(next) + '"),';
									next.setDate(next.getDate() + rows[i].frequency);
								}
							}
							if (sqlBase != '') {
								sql = sql.slice(0, -1);
								connection.query(sql, function (err, result) {
									if (err)
										callback(err, null);
									else {
										let postquery='SELECT Treatment.name, Plant.commonName, MyPlant.name AS namemyplant, Garden.title, Task.* FROM User, Garden, MyPlant, Plant, Task, TreatmentPlant, Treatment WHERE User.id = Garden.user AND Garden.id = MyPlant.garden AND MyPlant.id = Task.myPlant AND Task.treatmentPlant = TreatmentPlant.treatment AND Task.tPlant = TreatmentPlant.plant AND TreatmentPlant.treatment = Treatment.id AND TreatmentPlant.plant = Plant.id AND User.id = "' + user + '" AND (';
										for(let i=0; i<dates.length; i++){
											postquery+='MONTH(Task.date) = ' + month[i] + ' AND YEAR(Task.date) = ' + year[i] + ' OR ';
										}
										postquery = postquery.substring(0, postquery.length -3);
										postquery+=') ORDER BY Task.date';
										connection.query( postquery, function(error, row) {
											if (error)
												callback(error, null);
											else 
												callback(null, row);
										});
									}										
								});
							}
						}
					});				
				}	
				else 
					callback(null, row);	
			}	
		});
	}
}

task.getTasksByMyPlant = function (number, page, user, myplant, callback) {
	if (connection) {
		let minPeak = (page - 1) * number;
		connection.query('SELECT Treatment.id AS treatment, Treatment.name, Plant.commonName, MyPlant.name, Plant.id AS plant, Garden.title, Task.date FROM Garden, MyPlant, Plant, Task, TreatmentPlant, Treatment WHERE User.id = Garden.user AND Garden.id = MyPlant.garden AND MyPlant.id = Task.myPlant AND Task.treatmentPlant = TreatmentPlant.treatment AND Task.tPlant = TreatmentPlant.plant AND TreatmentPlant.treatment = Treatment.id AND TreatmentPlant.plant = Plant.id AND  User.id = "' + user + '" AND MyPlant.id = ' + myplant + ' ORDER BY Task.date LIMIT ' + minPeak + ',' + number, function(error, row) {
			if (error)
				callback(error, null);
			else
				callback(null, row);
		});
	}
}

task.insertTasks = function (myPlant, plant, callback) {
	if (connection) {
		connection.query('SELECT treatment, frequency, initDate, finalDate FROM TreatmentPlant, Plant WHERE TreatmentPlant.plant = Plant.id AND Plant.id = ' + plant , function(error, row) {
			if (error)
				callback (error, null);
			else if (typeof row!== 'undefined' && row.length > 0){
				sql = 'INSERT INTO Task (tPlant, treatmentPlant, myPlant, mPlant, date) VALUES ';
				for (var object in row) {
					let initDate, finalDate, sqlBase;
					for (var detail in row[object]) {
						if (detail == 'treatment')
							sqlBase = '(' + plant + ',' + row[object][detail] + ',' + myPlant + ',' + plant;
						else if (detail == 'frequency' && row[object][detail] != null) {
							todayDate = new Date();
							var nextMonth = todayDate.getMonth() + 1;
							while(todayDate.getMonth() < nextMonth) {
								let month = todayDate.getMonth() + 1;
								sql += sqlBase + ',"' + dateFormat(todayDate) + '"),';
								todayDate.setDate(todayDate.getDate() + row[object][detail]);
							}
						}
						else if (detail == 'initDate' &&  row[object][detail] != null)
							initDate = new Date(row[object][detail]);
						else if (detail == 'finalDate' &&  row[object][detail] != null)
							finalDate = new Date(row[object][detail]);
						if (typeof initDate !== 'undefined' && typeof finalDate !== 'undefined')
							for (initDate; initDate <= finalDate; initDate.setDate(initDate.getDate() + 1)) {	
								sql += sqlBase + ',"' + dateFormat(initDate) + '"),';
							}
					}
				}
				sql = sql.slice(0, -1);
				connection.query(sql, function(error, result) {
					if (error)
						callback(error, null);
					else
						callback(null, result.affectedRows);
				});
			}
			else
				callback (null, 0);
		});
	}
}

task.insertNewTreatmentTask = function (plant, treatment, frequency, initDate, finalDate, callback) {
	if (connection) {
		connection.query('SELECT id FROM MyPlant WHERE plant = ' + plant, function (error, row) {
			if (error)
				callback (error, null);
			else if (typeof row!== 'undefined' && row.length > 0) {
				var sqlValues = '';
				var sqlBase = '(' + plant + ',' + treatment + ',' + plant + ', X';
				if (typeof frequency !== 'undefined' && typeof initDate == 'undefined' && typeof finalDate == 'undefined') {
					todayDate = new Date();
					var nextMonth = todayDate.getMonth() + 1;
					while(todayDate.getMonth() < nextMonth) {
						let month = todayDate.getMonth() + 1;
						sqlValues += sqlBase + ',"' + todayDate.getFullYear() + '-' + month + '-' + todayDate.getDate() + '"),';
						todayDate.setDate(todayDate.getDate() + frequency);
					}
				}
				else if (typeof frequency == 'undefined' && typeof initDate != 'undefined' && typeof finalDate != 'undefined') {
					for (initDate; initDate <= finalDate; initDate.setDate(initDate.getDate() + 1)) {
						let month = initDate.getMonth() + 1;
						sqlValues += sqlBase + ',"' + initDate.getFullYear() + '-' + month + '-' + initDate.getDate() + '"),';
					}
				}
				sqlFilled = 'INSERT INTO Task (tPlant, treatmentPlant, mPlant, myPlant, date) VALUES ';
				for (var mplant in row) 
					sqlFilled += sqlValues.replace(new RegExp('X', 'g'), row[mplant].id);	
							
				sqlFilled = sqlFilled.slice(0, -1);	
				connection.query(sqlFilled, function (error, result) {
					if (error)
						callback (error, null);
					else
						callback (null, result.affectedRows);
				});
			}
		});
	}
}

task.moveTask = function (myPlant, mPlant, tPlant, treatmentPlant, date, newDate, callback) { //Mover tarea de sitio
	if (connection) {
		connection.query('UPDATE Task SET date = "'+newDate+'" WHERE date="'+date+'" AND tPlant=' + tPlant + ' AND treatmentPlant=' + treatmentPlant + ' AND myPlant=' + myPlant + ' AND mPlant=' + mPlant, function(error, row) {
			if (error)
				callback(error, null);
			else
				callback(null, row.affectedRows);
		});
	}
}

task.setTaskDone = function (myPlant, mPlant, tPlant, treatmentPlant, date, dateDone, callback) { //Un usuario puede marcar como hecha la de otro. Revisar
	if (connection) {
		connection.query('UPDATE Task SET dateDone = "' + dateDone + '" WHERE date="'+date+'" AND tPlant =' + tPlant + ' AND treatmentPlant =' + treatmentPlant + ' AND myPlant =' + myPlant + ' AND mPlant =' + mPlant, function(error, row) {
			if (error)
				callback(error, null);
			else
				callback(null, row.affectedRows);
		});
	}
}

task.setTaskUndone = function (myPlant, mPlant, tPlant, treatmentPlant, date, callback) { //Un usuario puede marcar como hecha la de otro. Revisar
	if (connection) {
		connection.query('UPDATE Task SET dateDone = null WHERE date="'+date+'" AND tPlant =' + tPlant + ' AND treatmentPlant =' + treatmentPlant + ' AND myPlant =' + myPlant + ' AND mPlant =' + mPlant, function(error, row) {
			if (error)
				callback(error, null);
			else
				callback(null, row.affectedRows);
		});
	}
}

task.deleteTasksByMyPlant = function (myPlant, callback) { //Se borran las las proximas tareas o todas. Cuidado con ON delete cascade de MyPlant
	if (connection) {
		connection.query('DELETE FROM Task WHERE myPlant = ' + myPlant, function (error, row) {
	    	if (error)
        		callback(error, null);
        	else
        		callback(null, row.affectedRows);
		});
	}
}

module.exports = task;
