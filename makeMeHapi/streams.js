var Hapi = require('hapi');
var fs = require('fs');

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply){
    //In this example I didn't use the ROT13 file as required by the makemehapi tutorial and instead used
    //HallOfFame.csv list.
    var thisFile = fs.createReadStream(__dirname + '/HallOfFame.csv');
    reply(thisFile);
  }
});

server.start();
