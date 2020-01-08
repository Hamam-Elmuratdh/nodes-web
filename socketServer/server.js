var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var server = http.listen(5000, () => {
    console.log('socketIO is running on port', server.address().port);
});

// const roomTest = io.of('/room1')
io.on('connection', (socket) => {
    console.log(`user connected`)
    // roomTest.on('MESSAGE', (data) => {
    //     console.log(`${data}`)
    // })
    // roomTest.join()
})
