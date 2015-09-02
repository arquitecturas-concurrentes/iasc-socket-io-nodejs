var io = require('socket.io-client');

socket = io.connect('http://localhost:9001');

socket.on('connect', function () { console.log("socket connected"); });
socket.on('_ping', function(data){
    console.log('Received heartbeat');
    socket.emit('_pong', {beat: 1});
});
