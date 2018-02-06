var express = require('express');
var http = require('http');
var app = require('./app');

var port = process.env.PORT || 8000;


var server  = http.createServer(app);

server.listen(port);

server.on('error', function(err){
    console.log(err);
});
server.on('listening', function(res){
    console.log("Server started on port : "+ port);
});

