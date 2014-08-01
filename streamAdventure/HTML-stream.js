// Your program will get some html written to stdin. Convert all the inner html to
// upper-case for elements with a class name of "loud".
//
// You can use `trumpet` and `through` to solve this adventure.

var trumpet = require('trumpet')();
var through = require('through');

var stream = trumpet.select('.loud').createStream();

stream.pipe(through(function (buf) {
    this.queue(buf.toString().toUpperCase());
})).pipe(stream);

process.stdin.pipe(trumpet).pipe(process.stdout);


//Now `stream` outputs all the inner html content at `'.beep'` and the data you
//write to `stream` will appear as the new inner html content.
