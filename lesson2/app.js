var express = require('express');
var utility = require('utility');

var app = express();

app.get('/', function(req, res){
	var q = req.query.q;
	var md5value = utility.sha1(q);

	res.send(md5value);
});

app.listen(3000, function(req, res) {
	console.log('app is listening at port 3000.')
})