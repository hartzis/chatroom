$(document).on('ready', function() {
  var socket = io.connect('http://localhost');

  // emit submitted message
  $(document).on('keypress', '#message-input', function(event) {
    if (event.which === 13){
      console.log('sending server', $(this).val());
      socket.emit('fromClientMessage', {message: $(this).val()});
      $(this).val('');
    }
  })

  // handle new message recieved
  socket.on('fromServerMessage', function (data) {
    console.log('from server-',data);
    var currentMessages = $('#messages').val();
    $('#messages').val(currentMessages+'\n'+data.message)
    })

});

