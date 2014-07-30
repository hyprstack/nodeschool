var fs = require('fs');
var path = require('path');//require the path module
//This module contains utilities for handling and transforming file paths

//fs.readdir - Reads the contents of a directory. The callback gets two arguments (err, files)
// where files is an array of the names of the files in the directory excluding '.' and '..'.
fs.readdir(process.argv[2],  function(err, data){
//forEach The forEach method executes the provided callback once for each value which actually exists in the Set object
    data.forEach(function(file){
      //path.extname - Return the extension of the path, from the last '.' to end of string in the last portion of the path.
      if (path.extname(file) === '.' + process.argv[3])
        console.log(file);
    });
});
