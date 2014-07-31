var http = require('http');

var server = http.createServer();

server.on('request', function(req, rep){
  //send an answer if the resquest method is not a POST method
  if(req.method !== 'POST') {
    return rep.end('Only accepts POST');
  }
  //define the str variable to save the incoming chunk of data
  var str = '';
  req.on('data', function(chunk){
    str = str + chunk;
  });
  //output the above created str variable as a string in upper-case
  req.on('end', function(){
    rep.end(str.toString().toUpperCase());
  });
});

//listen on the port number provided as the first argument
server.listen(Number(process.argv[2]));
