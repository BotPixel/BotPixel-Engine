var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var #1 = io.of('/1');

id1.on('connection', function(socket){
  socket.on('player move', function(msg){
    id1.emit('player move', msg);
    socket.on('chat message', function(msg){
    id1.emit('chat message', msg);
    socket.on('shoot', function(msg){
    id1.emit('shoot', msg);
    socket.on('join', function(msg){
    id1.emit('join', msg);
    socket.on('killfeed', function(msg){
    id1.emit('killfeed', msg);
    socket.on('hurt', function(msg){
    id1.emit('hurt', msg);
    socket.on('death', function(msg){
    id1.emit('death', msg);
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
