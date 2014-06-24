var express = require('express');
var bodyParser = require('body-parser');

// require socket.io
var socketio = require('socket.io');

var app = express().createServer();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser().json());

var io = socketio(app);

app.get('/', function(req, res) {
	res.render('index');
});

io.on('connection', function(socket) {
  socket.emit('news', { hello: 'world'});
  socket.on('message', function(data) {
    console.log(data);
  })
});


var server = app.listen(5690, function() {
	console.log('Express server listening on port ' + server.address().port);
});
