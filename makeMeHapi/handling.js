/*
Create a server which responds to requests to / with a static HTML file named
index.html containing the following:

    <html>
        <head><title>Hello Handling</title></head>
        <body>
            Hello Handling
        </body>
    </html>

-------------------------------------------------------------------------------

## HINTS

You can declare handlers as objects instead of functions. The object must
contain one of the following: file, directory, proxy, or view.

For example, handler can be assigned an object with the file key:

    handler: {
        file: "index.html"
    }
*/

 var Hapi = require('hapi');
 var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

 server.route(
   {
     path: '/',
     method: 'GET',
     handler: {
       file: 'files/index.html'
     }
   }
 );

 server.start();

 // OR

 var Hapi = require('hapi');
 var path = require('path');

 var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
 server.route({
    method: 'GET',
    path: '/',
    handler: {
        file: path.join(__dirname + '/index.html')
    }
 });
 server.start();
