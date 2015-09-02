var http = require('http');
var express = require('express');
var app = express();

var server = http.createServer(app);
var io = require('socket.io')(server);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

server.listen(9001, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Ping/Pong listening at http://%s:%s', host, port);
});

