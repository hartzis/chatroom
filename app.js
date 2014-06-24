var express = require('express');
var bodyParser = require('body-parser');

// require http for use with socket.io
var http = require('http');

// require socket.io
var socketio = require('socket.io');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// setup socket server
var server = http.createServer(app);
var io = socketio.listen(server);

app.get('/', function(req, res) {
	res.render('index');
});

io.on('connection', function(socket) {
  socket.on('fromClientMessage', function(data) {
    // console.log(data);
    io.emit('fromServerMessage', {message: data.message});
  })
});


server.listen(5690, function() {
	console.log('Express server listening on port ' + server.address().port);
});
