var fs = require("fs");
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
	console.log("A user made a request... " + request.url);
	response.writeHead(200, {"Context-Type": "text/html"});
	fs.createReadStream("./index.html").pipe(response);
});

app.get('/home.html', function(request, response) {
	console.log("A user made a request... " + request.url);
	response.writeHead(200, {"Content-Type": "text/html"});
	fs.createReadStream("./home.html").pipe(response);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
