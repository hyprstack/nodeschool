var fs = require('fs');
var data = fs.readFileSync(process.argv[2]);
//You can avoid the to.String() method by passing 'utf8' as the second argument to fs.readFileSync - fs.readFileSync(process.argv[2], 'utf8');

var str = data.toString().split("\n");
//Could also have been written: var str = data.toString().split("\n").length-1;
//And using the above mentioned could also be: var str = fs.readFileSync(process.argv[2], 'utf8').split(\n).length-1;
console.log(str.length-1);
//If we had used the above code mentioned above we would : console.log(str);
