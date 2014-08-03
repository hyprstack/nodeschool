//To get into the rhythm, let's do a simple hello world.
//
// Write a Node program that accepts two command-line arguments, X and
// Y and prints out to the console the following text:
//
//   ALL YOUR X ARE BELONG TO Y


console.log('ALL YOUR ' + process.argv[2] + ' ARE BELONG TO ' + process.argv[3]);



/* ************ The official solution ***************

 console.log(
    'ALL YOUR %s ARE BELONG TO %s',
    process.argv[2],
    process.argv[3]
  );


**************************************************** */
