var fs = require('fs');
//pipe process.argv[2] to process.stdout
fs.createReadStream(process.argv[2]).pipe(process.stdout);
