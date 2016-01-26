//Socket
var socket = io();
    socket.on('connected', function(msg){
	alert(msg);
});