var fs = require("fs");
var express = require('express');
var app = express();

//Set the server port to be on 5000. e.g. localhost:5000
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.use(express.static("/"));

function returnIndexHtml(request, response){
	console.log("A user made a request... " + request.url);
	response.writeHead(200, {"Content-Type": "text/html"});
	fs.createReadStream("./public/index.html").pipe(response);
}

function returnHomeHtml(request, response){
	console.log("A user made a request... " + request.url);
	response.writeHead(200, {"Content-Type": "text/html"});
	fs.createReadStream("./public/home.html").pipe(response);
}

function returnShaneHtml(request, response){
	console.log("A user made a request... " + request.url);
	response.writeHead(200, {"Content-Type": "text/html"});
	fs.createReadStream("./public/shane.html").pipe(response);
}

app.get('/', returnIndexHtml);
app.get('/index.html', returnIndexHtml);
app.get('/home.html', returnHomeHtml);
app.get('/shane.html', returnShaneHtml);

//This needs to be at the end... It is a redirect in case wrong URL is requested.
app.get('*', function(request, response){
	response.redirect("https://shielded-earth-23416.herokuapp.com");
});
