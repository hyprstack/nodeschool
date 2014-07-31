var http = require('http');
var fs = require('fs');
var url = require('url');

//request is used to fetch properties, such as the header and query-string from the
//request while response is for sending data to the client, both headers and body.
var server = http.createServer(function(req, res){

  //set the headers
  res.writeHead(200, {'content-type': 'application/json'});

  //send response if not a GET mehtod
  if(req.method !== 'GET') {
		return res.end('Sorry, we only accept GET requests');
	}

  //set variable path which splits the url at ? and returns index 0
  var path = req.url.split('?')[0],

  //ds splits the url at = and returns index 1
		 ds = req.url.split('=')[1];

  //define conditions for responses depending on the path
  if(path === '/api/parsetime'){
		res.end( JSON.stringify(dateFromTimeString(ds)) );
	}
	else if(path === '/api/unixtime') {
		var uts = { "unixtime": new Date(Date.parse(ds)).getTime() };
		res.end( JSON.stringify(uts) );
	}
});


//define function to pass to JSON.stringify above to out-put json formated date
function dateFromTimeString(ds){
	var D = new Date(Date.parse(ds)) ;
	return {
		"hour"  : D.getHours(),
		"minute": D.getMinutes(),
		"second": D.getSeconds()
	};
}

server.listen(Number(process.argv[2]));
