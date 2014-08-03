// Objective : Write a program that opens a LevelDB data-store using `level`.
//
// The full path to the data-store will be provided to your program as
// the first command-line argument.
//
// The second command-line argument is a string containing a complete
// JSON-encoded object. Parse this object and put each property of
// the object into your data-store where the property name is the entry's
// key and the property value is the entry's value.
//
// Your solution will be verified by reading the data-store and checking
// against the object that was provided to you.

var level = require('level');
var db = level(process.argv[2]);

var keyValue = JSON.parse(process.argv[3]);


for(var prop in keyValue){
  //keyValue[prop] is tha same as each value of each property
  db.put(prop, keyValue[prop]);
}



/*
HINTS:

The `put()` method in LevelUP is very simple, you just need to supply
the key and value. An optional callback may be passed if you need
to know when the data has been committed to the store or to
properly catch any errors (otherwise errors will be thrown):

  var db = level('/path/to/db/')
  db.put('foo', 'bar', function (err) {
    if (err)
      return console.error('Error in put():', err)
    console.error('put foo = bar')
  })

You may also call `db.close()` after all your callbacks have returned,
however this is optional as the data-store will be automatically
closed when your program exits. An open LevelDB store will not keep
your program running indefinitely.

To get output for debugging when running `levelmeup run program.js`
you should use console.error instead of console.log.

**************Official Solution *****************

  var level = require('level');
  var db = level(process.argv[2]);
  var obj = JSON.parse(process.argv[3]);

  for (var key in obj) {
    db.put(key, obj[key]);
  }

**************************************************

*/
