var validator = require('validator');
module.exports = function (body) {
	for (var key in body) 
		if (typeof body[key]=== 'undefined' || body[key] == null || body[key]== 'undefined')
			body[key] = void 0; //Asigna tipo a undefined
		else
			body[key] = validator.escape(validator.stripLow(validator.trim(body[key]))); //Sanitiza
	return body;	
}