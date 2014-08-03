//Objective - Write a program that opens a LevelDB data-store using `level`.
//
// Fetch and print to the console the value associated with the key
// 'levelmeup'.
//
// The first command-line argument to your program will be the full path
// to the directory containing the LevelDB store.

var level = require('level');
var db = level(process.argv[2]);
db.get("levelmeup", function(err, value){
  console.log(value);
});

/*
HINTS:

`level` is a package that bundles both `levelup`, the Node-friendly
data-store API and `leveldown`, the low-level LevelDB binding.

Read more about Level and LevelUP:
  http://npm.im/levelup
Or off-line on your local filesystem:
  /usr/local/lib/node_modules/levelmeup/docs/levelup.html

You will need to `npm install level` to get started with this
exercise.

If you don't have an Internet connection, simply make a `node_modules`
directory and copy the following directory into it:
  /usr/local/lib/node_modules/levelmeup/node_modules/level/

You can open an existing data-store, or create a new one, by invoking
`level()` and passing in a path to a directory. The function returns
a new LevelUP instance.

All LevelUP methods are asynchronous. To get a value out of the
data-store, use the `.get(key, callback)` method:

  var level = require('level')
  var db = level('/path/to/db/')
  db.get('foo', function (err, value) {
    console.log('foo =', value)
  });

************** The offical solution ********************

  var level = require('level');
  var db = level(process.argv[2]);

  db.get('levelmeup', function (err, value) {
    if (err)
      throw err;

    console.log(value);
  });

********************************************************

*/
