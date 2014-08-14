/*
Create a server which responds to requests to /?name=Handling using a template
located at templates/index.html which outputs the following HTML:

    <html>
        <head><title>Hello Handling</title></head>
        <body>
            Hello Handling
        </body>
    </html>

-------------------------------------------------------------------------------

## HINTS

The view key can be used to define the template to be used to generate the
response.

    handler: {
        view: "index.html"
    }

createServer takes an options object as a third parameter. Using this options
object, you can configure the server to use different templating engines based
on file extension. You can also define a directory path for templates.

    var options = {
        views: {
            path: 'templates',
            engines: {
                html: require('handlebars')
            }
        }
    };

In this exercise, we'll be using Handlebars. To install handlebars:

    npm install handlebars

With Handlebars templates, you can render a variable directly in HTML by
surrounding the variable with curly braces, e.g. {{foo}}.

The template receives some information from the request. For example, the query
parameters that were passed in via the URL are available in the query object.
These parameters can then be used in the template.

    <div>{{query.paramName}}</div>
*/
var Hapi = require('hapi');

var path = require('path');

var options = {
  views: {
    path: path.join(__dirname + '/templates'),
    engines: {
      html: require('handlebars')
    }
  }
};

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080), options);

server.route(
  {
    path: "/",
    method: "GET",
    handler: {
      view: "index.html"
    }
  }
);

server.start();
