var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var #1 = io.of('/1');
var text = "";
var i;
for (i = 0; i < 5001; i++) {
(id + i).on('connection', function(socket){
  socket.on('player move', function(msg){
    (id + i).emit('player move', msg);
    socket.on('chat message', function(msg){
    (id + i).emit('chat message', msg);
    socket.on('shoot', function(msg){
    (id + i).emit('shoot', msg);
    socket.on('join', function(msg){
    (id + i).emit('join', msg);
    socket.on('killfeed', function(msg){
    (id + i).emit('killfeed', msg);
    socket.on('hurt', function(msg){
    (id + i).emit('hurt', msg);
    socket.on('death', function(msg){
    (id + i).emit('death', msg);
    });
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
}); 

io.on('connection', function(socket){
  socket.on('player move', function(msg){
    io.emit('player move', msg);
  });
});

io.on('connection', function(socket){
  socket.on('shoot', function(msg){
    io.emit('shoot', msg);
  });
});

io.on('connection', function(socket){
  socket.on('join', function(msg){
    io.emit('join', msg);
  });
});

io.on('connection', function(socket){
  socket.on('leave', function(msg){
    io.emit('leave', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
