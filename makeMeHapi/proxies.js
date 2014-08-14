/*
Create a server which takes any requests to the path /proxy and proxies them
to http://localhost:65535/proxy.

-------------------------------------------------------------------------------

## HINTS

The proxy key can be used to generate a reverse proxy handler.

    handler: {
        proxy: {
            host: '127.0.0.1',
            port: 8080
        }
    }
*/

var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route({
  method: 'GET',
  path: '/proxy',
  handler: {
    proxy: {
      host: '127.0.0.1',
      port: 65535
    }
  }
});

server.start();
