var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var test = io.of('/test');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

test.on('connection', function(socket){
  socket.on('chat message', function(msg){
    test.emit('chat message', msg);
  });
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
