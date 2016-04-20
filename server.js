var fs = require("fs");
var express = require('express');
var app = express();

//Set the server port to be on 5000. e.g. localhost:5000
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

function returnIndexHtml(request, response){
	console.log("A user made a request... " + request.url);
	response.writeHead(200, {"Content-Type": "text/html"});
	fs.createReadStream("./index.html").pipe(response);
}

function returnHomeHtml(request, response){\
	console.log("A user made a request... " + request.url);
	response.writeHead(200, {"Content-Type": "text/html"});
	fs.createReadStream("./home.html").pipe(response);
}

app.get('/', returnIndexHtml(request, response));
app.get('/index.html', returnIndexHtml(request, response));
app.get('/home.html', returnHomeHtml(request, response));
