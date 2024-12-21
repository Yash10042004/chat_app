$(document).ready(function() {
    // Connect to the Socket.io server
    var socket = io('http://localhost:4000');

    $('#send-button').click(function() {
        var message = $('#message-input').val(); // Get the value from the input field
        if (message.trim() !== '') {
            socket.emit('sendMessage', message); // Send the message to the server
            $('#message-input').val(''); // Clear the input field
        }
    });

    $('#message-input').keypress(function(e) {
        if (e.which == 13) { // Check if the Enter key is pressed
            $('#send-button').click(); // Trigger the click event of the send button
        }
    });

    socket.on('receiveMessage', function(message) {
        $('#message-area').append('<div>' + message + '</div>'); // Append the message to the message area
    });
});
