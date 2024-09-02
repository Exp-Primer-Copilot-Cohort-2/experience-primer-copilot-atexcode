// Create a webserver
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var server = http.createServer(function(req, res) {
  var urlParsed = url.parse(req.url, true);

  if (urlParsed.pathname == '/') {
    res.end('Hello world');
  }
});