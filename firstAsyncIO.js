var fs = require('fs');
var data = fs.readFile(process.argv[2], function(err, data){
    var str = data.toString().split("\n");
    console.log(str.length-1);
});
