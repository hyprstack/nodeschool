/*
In this example, you will be given a readable stream, `counter`, as the first
argument to your program:

    module.exports = function (counter) {
        // return a duplex stream to capture countries on the writable side
        // and pass through `counter` on the readable side
    };

Return a duplex stream with the `counter` as the readable side. You will be
written objects with a 2-character `country` field as input, such as these:

    {"short":"OH","name":"Ohio","country":"US"}
    {"name":"West Lothian","country":"GB","region":"Scotland"}
    {"short":"NSW","name":"New South Wales","country":"AU"}

Create an object to keep a count of all the countries in the input. Once the
input ends, call `counter.setCounts()` with your country counts.
*/

var duplexer = require('duplexer');
var through = require('through');

module.exports = function (counter) {
    //set a variable to store the incoming rows of data
    var counts = {};
    //get the input
    var input = through(write, end);

    function write (row) {
      //incoming data is streamed in as rows of data and is added to counts
        counts[row.country] = (counts[row.country] || 0) + 1;
    }
    function end () {
    //create a set counter (counter variable is passed in as argument to the function) which takes counts as the data
		counter.setCounts(counts);
    }

    return duplexer(input, counter);
};
