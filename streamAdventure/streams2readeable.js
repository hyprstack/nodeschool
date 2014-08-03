    var fs = require('fs');

    module.exports = Reader;

    function Reader (arg) {
      //pipe process.argv[2] to process.stdout
      fs.createReadStream(arg).pipe(process.stdout);
    }
