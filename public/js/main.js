var socket = io.connect('http://localhost');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('message', { my: 'data' });
  socket.on('message', function (data) {
    console.log(data);
  })
  });