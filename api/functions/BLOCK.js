var express = require('express');
var router = express.Router();
module.exports = router.all('*', function (req, res, next) {
  res.status(501).json({"Mensaje":"Ruta no disponible por el momento"});
});