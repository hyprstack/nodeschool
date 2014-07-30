var http = require('http');

//http.get(options, [callback])
//Since most requests are GET requests without bodies, Node provides this convenience method.
//The only difference between this method and http.request() is that it sets the method to GET and calls req.end() automatically.
http.get(process.argv[2], function(response){

  //The response object / Stream that you get from http.get() also has a setEncoding() method. If you call this method with "utf8",
  //the "data" events will emit Strings rather than the standard Node Buffer objects which you have to explicitly convert to Strings.
  response.setEncoding('utf8');

  //The "data" is emitted when a chunk of data is available and can be processed.
  //The size of the chunk depends upon the underlying data source.
  response.on('data', function(chunk){
    console.log(chunk);
  });
  response.on('error', function(err){
    console.log('\n\nFail: ',err);
  });
});


// try it in your command terminal with:
// node httpclient http://en.wikipedia.org/wiki/Nodejs
