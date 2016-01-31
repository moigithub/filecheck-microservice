'use strict';
var multer = require('multer');
var fs= require('fs');
var upload = multer({ dest: 'temp/' });

module.exports = function (app) {

	app.post('/api/fileanalyse', upload.single('thefile'), function (req, res, next) {
	  // req.file is the `avatar` file 
	  // req.body will hold the text fields, if there were any 

	  //console.log("body>>",req.body);
	  //console.log("files>>",req.file);

	  if(req.file){
	  	var fileSize = req.file.size;
	  	// delete file
//	  	console.log('deleting.. '+req.file.filename);
	  	fs.unlink('temp/'+req.file.filename, function(){});

	  	return res.json({'fileSize':fileSize.toString()});
	  }
	  return res.status(404).send('Invalid file or not specified.');
	});

};
