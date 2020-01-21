var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

var users = {};
var rooms = {};

io.on('connection', function (socket) {

    socket.on('login', function (data, callback) {
        if (data in users) {
            callback(false);
        } else {
            callback(true);
            socket.nickname = data;
            users[socket.nickname] = socket;
            socket.join('all');
            if (rooms['all'] == undefined) rooms['all'] = [];
            rooms['all'].push(socket.nickname);
            io.emit('user');
        }
    });

    socket.on('join', function (room) {
        socket.join(room);
        io.emit('user');
        if (rooms[room] == undefined) rooms[room] = [];
        rooms[room].push(socket.nickname);
    });


    socket.on('event', function (msg) {
        io.to(msg.room).emit('event', msg.msg);
    });

    socket.on('getusers', function (data) {
        socket.emit('users', rooms[data]);
    });

    socket.on('disconnect', function (data) {
        delete users[socket.nickname];
        for (var room in rooms) {
            if (rooms.hasOwnProperty(room)) {
                var element = rooms[room];
                var index = element.indexOf(socket.nickname);
                if (index > -1) {
                    element.splice(index, 1);
                    io.to(room).emit('user');
                }
            }
        }  
    });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
