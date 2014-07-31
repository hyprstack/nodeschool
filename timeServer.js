/*
The Transmission Control Protocol (TCP) is one of the core protocols of the Internet protocol suite (IP),
and is so common that the entire suite is often called TCP/IP. TCP provides reliable, ordered and error-checked delivery
of a stream of octets between programs running on computers connected to a local area network, intranet or the public Internet.
The protocol corresponds to the transport layer of TCP/IP suite. TCP provides a communication service at an intermediate level
between an application program and the Internet Protocol (IP). That is, when an application program desires to
send a large chunk of data across the Internet using IP, instead of breaking the data into IP-sized pieces and issuing a series of IP requests,
the software can issue a single request to TCP and let TCP handle the IP details.

source: http://en.wikipedia.org/wiki/Transmission_Control_Protocol
*/


//There's no HTTP involved here so we need to use the net module from Node core

//The net module provides you with an asynchronous network wrapper. It contains methods for creating
// both servers and clients (called streams). You can include this module with require('net');
var net = require('net');

//zeroFill day/month/hour/min/sec lower than 9
//this is so that the output of the date when months and times are under 10, to have a zero before the leading number
//instead of 1:9 you would have 01:09
function zeroFill(n){
  	if(n > 9){
  		return n.toString();
  	} else {
  		return '0'+n.toString();
  	}
}

function printDate(){
  var date = new Date();
  var year = date.getFullYear();
  var month = zeroFill(date.getMonth()+1);
  var day = zeroFill(date.getDate());
  var hour = zeroFill(date.getHours());
  var min = zeroFill(date.getMinutes());

return year + '-' + month + '-' + day + ' ' + hour + ':' + min + '\n';
}



//The net module has a method named net.createServer() that takes a callback function. Unlike most callbacks in Node,
// the callback used by createServer() is called more than once. Every connection received by your server triggers another call to the callback
var server = net.createServer(function (socket) {
  // socket handling logic
  socket.end( printDate() );
});
server.listen(process.argv[2]);


//*********OR************

    var net = require('net');

    function zeroFill(i) {
      //use the ternary operator
      //test ? expression1 : expression2
      return (i < 10 ? '0' : '') + i;
    }

    function now () {
      var d = new Date();
      return d.getFullYear() + '-' + zeroFill(d.getMonth() + 1) + '-' + zeroFill(d.getDate()) + ' ' + zeroFill(d.getHours()) + ':' + zeroFill(d.getMinutes());
    }

    var server = net.createServer(function (socket) {
      socket.end(now() + '\n');
    });

    server.listen(Number(process.argv[2]));
