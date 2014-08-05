// A higher-order function (also functional form, functional or functor) is a function that does at least one of the following:
//
//   * take one or more functions as an input
//   * output a function
//
// All other functions are first order functions. [1]
//
// # Task
//
// Implement a higher-order function that takes a function and calls it 'n' times.
//
// ## Arguments
//
//   * operation: A Function, takes no arguments, returns no useful value.
//   * num: the number of times to call `operation`
//
// ## Resources
//
//   * https://en.wikipedia.org/wiki/Higher-order_function
//
// ## Hint: Recursion
//
// It's ok to use a loop in your implementation, bonus points
// if you don't.
//
// ## Boilerplate
//
//     function repeat(operation, num) {
//       // SOLUTION GOES HERE
//     }
//
//     module.exports = repeat

function repeat(operation, num){
  if(num){
    operation();
    repeat(operation, num-1);
  }
}

module.exports = repeat;

/*
 Official solution

  function repeat(operation, num) {
        if (num <= 0) return
        operation()
        return repeat(operation, --num)
      }

      module.exports = repeat

*/  
