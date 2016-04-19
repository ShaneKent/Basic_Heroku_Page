var http = require("http");
var fs = require("fs");

function send404Response(response){
	response.writeHead(404, {"Context-Type": "text/plain"});
	response.write("Error 404: Page not found!");
	response.end();
}

function onRequest(request, response){
	console.log("A user made a request... " + request.url);

	if (request.method == "GET" && request.url == "/"){
		response.writeHead(200, {"Context-Type": "text/html"});
		fs.createReadStream("./index.html").pipe(response);
	} else if (request.method = "GET" && request.url == "/home.html"){
		response.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream("./home.html").pipe(response);
	} else {
		send404Response(response);
	}
}

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  //response.render('pages/index');
  /*var result = '';
  var times = process.env.TIMES || 5;
  for (i = 0; i < times; i++){
     result += (cool() + " ");
  }
  response.send(result);*/
	response.writeHead(200, {"Context-Type": "text/plain"});
	response.write("Test!");
	response.end();
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
