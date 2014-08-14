/*
Create a hapi server that listens on port 8080 and outputs
"Hello [name]" where [name] is replaced with the path parameter
supplied to GET /{name}

When you have completed your server, you can run it in the test
environment with:

  makemehapi run program.js

And once you are ready to verify it then run:

  makemehapi verify program.js

-------------------------------------------------------------------------------

## HINTS

Create a server that listens on port 8080 with the following code:

    var Hapi = require('hapi');
    var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

Add a route handler similar to the following:

    function handler (request, reply) {
        reply('Hello ' + request.params.name);
*/

var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route ({
  path: '/{name}',
  method: 'GET',
  handler: function(request, reply){
    reply ('Hello ' + request.params.name);
  }
});

server.start();
