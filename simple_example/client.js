var io = require('socket.io-client');

socket = io.connect('http://localhost:9001');

socket.on('connect', function () { console.log("socket connected"); });
socket.emit('username', 'Pepe');
socket.on('response', function (ok) { console.log("Me llego pong con estado "+ok); });

