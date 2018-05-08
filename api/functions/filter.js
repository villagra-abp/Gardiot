var validator = require('validator');
module.exports = function (body) {
	for (var key in body)
		if (typeof body[key]=== 'undefined' || body[key] == 'null' || body[key]== 'undefined' || body[key]== '')
			body[key] = void 0; //Asigna tipo a undefined
		else if (key == 'photo' || key == '_3DModel' || key == 'icon')
			body[key] = validator.stripLow(validator.trim(body[key])); //Sanitiza
		else 
			body[key] = validator.escape(validator.stripLow(validator.trim(body[key]))); //Sanitiza
	return body;
}
