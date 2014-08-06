// //# Task
//
// Write a function that allows you to use Array.prototype.slice without using .call to invoke it.
//
// Normally you have to use slice with call or apply:
//
//     var slice = Array.prototype.slice
//
//     function() {
//       var args = slice.call(arguments) // this works
//     }
//
// We want this to work:
//
//     var slice = yourFunction
//
//     function() {
//       var args = slice(arguments) // this works
//     }
//
// ## Example
//
// A function, slice that exhibits the following behaviour:
//
//     var nums = [1,2,3,4,5]
//
//     // your slice function should match the regular
//     // behaviour of slice, except it takes the array
//     // as the first argument
//
//     slice(nums, 0, 2) // [1, 2]
//     slice(nums, 1, 2) // [2]
//
//     // regular slice usage for comparison
//     nums.slice(0, 2) // [1, 2]
//     nums.slice(1, 2) // [2]
//
// ## Conditions
//
//   * Do not use any for/while loops or Array#forEach.
//   * Do not use the `function` keyword :D
//
// ## Hints
//
//   * This is absolutely a one liner.
//   * Every JavaScript Function inherits methods such as call, apply and bind from the object `Function.prototype`.
//   * Function#call executes whatever the value of `this` when it's invoked.  e.g. someFunction.call() // `this` inside `call` is `someFunction`
//   * Function.call itself is a function thus it inherits from `Function.prototype`
//
//     function myFunction() {
//       console.log('called my function')
//     }
//
//     Function.prototype.call.call(myFunction) // => "called my function"
//
// ## Boilerplate
//
     module.exports = Function.prototype.call.bind(Array.prototype.slice);

      // Official Solution

      // Explained:
      // The value of `this` in Function.call is the function
      // that will be executed.
      //
      // Bind returns a new function with the value of `this` fixed
      // to whatever was passed as its first argument.
      //
      // Every function 'inherits' from Function.prototype,
      // thus every function, including call, apply and bind
      // have the methods call apply and bind.
      //
      // Function.prototype.call === Function.call
      
      //module.exports = Function.call.bind(Array.prototype.slice)
