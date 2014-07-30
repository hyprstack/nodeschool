var fs = require('fs');
var path = require('path');

//To define a single function export you assign your function to the module.exports object
module.exports = function (dirname, extension, callback) {
  //fs.readdir - Reads the contents of a directory. The callback gets two arguments (err, files)
  // where files is an array of the names of the files in the directory excluding '.' and '..'.
  fs.readdir(dirname, function(err, data){
    if(err) {
      return callback(err);
    }
    //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    data = data.filter(function(file){
      //path.extname - Return the extension of the path, from the last '.' to end of string in the last portion of the path.
      return path.extname(file) === '.' + extension;
    });
    callback(null, data);
  });
};
