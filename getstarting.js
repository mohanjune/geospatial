var express = require('express');
var http = require('http');
var fs = require('fs');
var json = require('./graph.json');

var app = express(express.logger());

app.get('/', function(request, response) {
  //var buf = new Buffer(fs.readFileSync('d3graph.html'), 'utf-8');
  var buf = new Buffer(fs.readFileSync('d3graph.html'), 'utf-8');
  var buf2 = new Buffer(fs.readFileSync('graph.json'), 'utf-8');
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

console.log('Server running on 8080');

