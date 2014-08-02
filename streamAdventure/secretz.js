//Objective - An encrypted, gzipped tar file will be piped in on process.stdin. To beat this
// challenge, for each file in the tar input, print a hex-encoded md5 hash of the
// file contents followed by a single space followed by the filename, then a
// newline.

var crypto = require('crypto');
var tar = require('tar'); // https://github.com/isaacs/node-tar
var zlib = require('zlib');
var through = require('through');

var parser = tar.Parse();
parser.on('entry', function (e) {
    if (e.type !== 'File') return;

    var h = crypto.createHash('md5', { encoding: 'hex' });
    e.pipe(h).pipe(through(null, end)).pipe(process.stdout);

    function end () {
		this.queue(' ' + e.path + '\n');
    }
});

var cipher = process.argv[2];
var pw = process.argv[3];
process.stdin.pipe(crypto.createDecipher(cipher, pw))
    .pipe(zlib.createGunzip())
    .pipe(parser);
    

// You will receive the cipher name as process.argv[2] and the cipher passphrase as
// process.argv[3]. You can pass these arguments directly through to
// `crypto.createDecipher()`.
//
// The built-in zlib library you get when you `require('zlib')` has a
// `zlib.createGunzip()` that returns a stream for gunzipping.
//
// The `tar` module from npm has a `tar.Parse()` function that emits `'entry'`
// events for each file in the tar input. Each `entry` object is a readable stream
// of the file contents from the archive and:
//
// `entry.type` is the kind of file ('File', 'Directory', etc)
// `entry.path` is the file path
//
// Using the tar module looks like:
//
//     var tar = require('tar');
//     var parser = tar.Parse();
//     parser.on('entry', function (e) {
//         console.dir(e);
//     });
//     var fs = require('fs');
//     fs.createReadStream('file.tar').pipe(parser);
//
// Use `crypto.createHash('md5', { encoding: 'hex' })` to generate a stream that
// outputs a hex md5 hash for the content written to it.
//
// Make sure to `npm install tar through` in the directory where your solution
// file lives.
