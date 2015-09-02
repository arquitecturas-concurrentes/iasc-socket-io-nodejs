var http = require('http');
var express = require('express');
var app = express();

var server = http.createServer(app);
var io = require('socket.io')(server);

//Ajustar de acuerdo al heartbeat que querramos
var timeout = 8000;

function sendHeartbeat(){
    console.log("Sending heartbeat to clients");
    io.sockets.emit('_ping', { beat : 1 });
}

io.sockets.on('connection', function (socket) {
    console.log("A client has just connected");
    setInterval(sendHeartbeat, timeout);
    socket.on('_pong', function(data){
        console.log("Pong received from client");
    });
});

server.listen(9001, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Ping/Pong listening at http://%s:%s', host, port);
});

