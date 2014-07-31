var http = require('http');

http.get(process.argv[2], function(response){
  response.setEncoding('utf8');//so that strings are emitted rather than the standard Node buffer objects
  //define a variable to store our encoded chunk of data
  var string = '';

  response.on('data', function(chunk){
    //add our chunk to our string variable
    string = string + chunk;
  });
  response.on('error', function(err){
    console.log('\n\nFail', err);
  });
  //This method signals to the server that all of the response headers and body
  //have been sent; that server should consider this message complete.
  response.on('end', function(){
    //print the number of characters received
    console.log(string.length);
    //print the string of characters received
    console.log(string);
  });
});
