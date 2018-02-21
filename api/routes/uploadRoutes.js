//require express library
var express = require('express');
//require the express router
var router = express.Router();
//require multer for the file uploads
var multer = require('multer');

var crypto = require('crypto');

var mime = require('mime');

//Storage para las fotos de perfil
var storage1 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../uploads/avatar/')
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
    });
  }
});

//Storage para las fotos de plantas
var storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../uploads/plant/')
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
    });
  }
});

var upload1 = multer({storage: storage1, limits: {fileSize: 1310720}}).single('photo');
var upload2 = multer({storage: storage2}).single('photo');

router.post('/uploadAvatar', function (req, res, next) {
     var path = '';
     upload1(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          return res.status(422).send(err)
        }  

       // No error occured.
        path = req.file.path;
        return res.send("Upload Completed for "+path); 
  });     
});

router.post('/uploadPlant', function (req, res, next) {
     var path = '';
     upload2(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          return res.status(422).send(err)
        }  
        console.log(res);
       // No error occured.
        path = req.file.path;
        return res.send("Upload Completed for "+path); 
  });     
});


module.exports = router;