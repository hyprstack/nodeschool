// Objective : Write a program that opens a LevelDB data-store using `level`.
//
// The store will contain up to 10 entries with keys in the form:
//
//   keyX
//
// Where 'X' is an integer between 0 and 100.
//
// You must find those entries and print them out to the console, ordered
// by 'X', ascending. You should print them out with:
//
//   console.log(key + '=' + value)
//   // will output "key12=here is that random text"
//
// The full path to the data-store will be provided to your program as
// the first command-line argument.

var level = require('level');
var db = level(process.argv[2]);

for (var i = 0; i < 101; i++){
  get(i);
}

function get(i){
  var key = 'key' + i;

  db.get(key, function handle(err, value){
    if(err) {
      //do nothing
    } else {
    console.log(key + '=' + value);
    }
  });
}

/*
HINTS:

When you perform a `.get()` operation, if the entry does not exist
your callback will receive an error object as the first argument.

It is also possible to receive I/O errors but you can differentiate
a `NotFoundError` by checking `err.type == 'NotFoundError'` or by
checking for a `err.notFound` boolean.

Using `.get()` is recommended for this exercise but if you're tempted
to use a ReadStream to solve this problem, beware that the sorting
may be a problem.

************* Official solution *********************

  var level = require('level');
  var db = level(process.argv[2]);

  function fetchNext (i) {
    var key = 'key' + i;
    db.get(key, function (err, data) {
      if (err) {
        if (!err.notFound)
          throw err;
      } else
        console.log(key + '=' + data);

      if (i < 100)
        fetchNext(i + 1);
    });
  }

  fetchNext(0);
******************************************************

*/
