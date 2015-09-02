var http = require('http');
var express = require('express');
var app = express();

var server = http.createServer(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
        socket.on('username', function(username) {
	    console.log("Llego un ping de "+username);
            socket.emit('response', 'ok');
        });
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

server.listen(9001, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Simple Socket.io example listening at http://%s:%s', host, port);
});

