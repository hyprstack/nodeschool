/*Convert data from `process.stdin` to upper-case data on `process.stdout`
using the `through` module.

through(write, end) returns a readable/writable stream and given `write` and
`end` functions, both of which are optional.

When you call `src.pipe(dst)` on some stream `dst` created with `through()`, the
`write(buf)` function will be called when data from `src` is available.
When `src` is done sending data, the `end()` function is called.

Inside the `write` and `end` callbacks, `this` is set to the through stream
returned by `through()` so you can just call `this.queue()` inside the callbacks
to transform data.*/

var through = require('through');

//When you specify a falsy value for the `write` argument, this function is used
//to pass input data directly through to the output unmodified:
        // function write (buf) { this.queue(buf) }

var tr = through(function (buf) {
    this.queue(buf.toString().toUpperCase());
});
process.stdin.pipe(tr).pipe(process.stdout);
