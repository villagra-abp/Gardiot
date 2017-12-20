var express = require('express');
var router = express.Router();
module.exports = router.all('*', function (req, res, next) {
  res.status(501).json({"Mensaje":"Método no disponible por el momento"});
});