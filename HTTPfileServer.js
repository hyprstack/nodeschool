var http = require('http');
var fs = require('fs');


//request is used to fetch properties, such as the header and query-string from the
//request while response is for sending data to the client, both headers and body.
var server = http.createServer(function(req, res){
  //set the headers
  res.writeHead(200, {'content-type': 'test/plain'});


  //Returns a new ReadStream object
  //The method returns a stream object which you can use src.pipe(dst) to pipe the data from the src stream to the dst stream.
  //In this way you can connect a filesystem stream with an HTTP response stream.
  fs.createReadStream(process.argv[3]).pipe(res);
});


server.listen(Number(process.argv[2]));
