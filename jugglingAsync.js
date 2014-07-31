var http = require('http');

var q = [ //define variable 'q' for queue and store our url's
    {
      url: process.argv[2],
      str: '',
      done: false
    },
    {
      url: process.argv[3],
      str: '',
      done: false
    },
    {
      url: process.argv[4],
      str: '',
      done: false
    }
];

//use the for each loop function to apply the http.get module to each of the incoming urls in variable 'q'
//'i' stands for each of indexes form the forEach loop
q.forEach(function(i){
    http.get(i.url, function(response){
      response.setEncoding('utf8');
      response.on('data', function(chunk){
      //store the enconded data chunks to each of the str objects for each of the indexes in 'q'
        i.str = i.str + chunk;
      });
      response.on('end', function(){
        //change done from false to true and define rule for only calling printResponse function to print responses once
        //once all are true
        i.done = true;
        if(q[0].done === true && q[1].done === true && q[2].done === true) {
          printResponses();
        }
      });
    });
  });
//define the printResponses function to be called in the forEach loop above
  function printResponses(){
    q.forEach(function(i){
      console.log(i.str);
    });
  }
