//# Task
//
// Write a function that takes an input string and returns it uppercased.
//
// ## Arguments
//
//   * input: a String of random words (lorem ipsum).
//
// ## Boilerplate
//
//     function upperCaser(input) {
//       // SOLUTION GOES HERE
//     }
//
//     module.exports = upperCaser

function upperCaser(input){
  var tr = input.toUpperCase();
  //console.log(tr);
  return tr;
}

module.exports = upperCaser;
