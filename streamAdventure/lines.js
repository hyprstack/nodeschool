/*
Objective - Instead of transforming every line as in the previous "INPUT OUTPUT" example,
for this challenge, convert even-numbered lines to upper-case and odd-numbered
lines to lower-case. Consider the first line to be odd-numbered.


You can use the `split` module to split input by newlines.


You can use the `split` module to split input by newlines. For example:

    var split = require('split');
    process.stdin
        .pipe(split())
        .pipe(through(function (line) {
            console.dir(line.toString());
        }))
    ;
*/
var through = require('through');
var split = require('split');
//define a variable to store our lines
var counter = 0;
//define a variable to reference our through function and transform our data
var tr = through(function(buf){
  //transform our buffer to string
  var line = buf.toString();
  //if module operator to define the rule for uneven numbered lines to be upper case.
  //The first line is odd, so the remainder 0/2 is 0, as is the division of any even number by 2. The remainder of 2/2 is 0, thus 2 % 2 = 0
  if( counter % 2 === 0 ) {
    line = line.toLowerCase();
  } else {
    line = line.toUpperCase();
  }
  //increment counter
  counter ++;
  //output each line on a new line - the chunk still remains a whole chunk!
  this.queue(line + '\n');
});
//use split to split the chunk of transformed data into individual chunks, each on a new line.
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);


/* ************* OR ***************
The "official soluction"

using the ternary operator

    var through = require('through');
    var split = require('split');

    var lineCount = 0;
    var tr = through(function (buf) {
        var line = buf.toString();
        this.queue(lineCount % 2 === 0
            ? line.toLowerCase() + '\n'
            : line.toUpperCase() + '\n'
        );
        lineCount ++;
    });
    process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

******************************** */
