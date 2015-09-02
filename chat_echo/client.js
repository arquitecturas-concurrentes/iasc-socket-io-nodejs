var io = require('socket.io-client');

socket = io.connect('http://localhost:9001');

socket.on('connect', function () { console.log("socket connected"); });
socket.emit('chat message', "Hello, World");
socket.on('chat message', function(data){
    console.log(data);
});
