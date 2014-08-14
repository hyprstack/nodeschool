/*
Create a hapi server that listens on a port passed from the command line and replies with
"Hello Hapi" when an HTTP GET request is sent to /.

The workshop will execute requests against the server and verify the output.

-------------------------------------------------------------------------------

## HINTS

Create a server that listens on port 8080 with the following code:

    var Hapi = require('hapi');
    var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

Routes are added via the route function:

    server.route({path: '/', method:'GET', handler: anonOrYourFunction});

Handlers can be anonymous functions or separately declared (just like in javascript :P), but all of them should have this signature:

    function handler(request, reply) {

        //request has all information
        //reply handles client response

        reply({mustFlow:true});
    }

Calling the start function gets a server listening on the assigned port:

    server.start();

*/


var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route(
  {
  path: '/',
  method: 'GET',
  handler: function(request, reply){
      reply ("Hello Hapi");
      }
});

server.start();
