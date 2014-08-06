// This is an example implementation of curry3, which curries up to 3 arguments:
//
//     function curry3(fun){
//       return function(three){
//         return function(two){
//           return function (one){
//             return fun(one, two, three)
//           }
//         }
//       }
//     }
//
// If we were to use this implementation with this sample function:
//
//     function abc(one, two, three) {
//       return one/two/three
//     }
//
// It would work like so:
//
//     var curryC = curry3(abc)
//     var curryB = curryC(2)
//     var curryA = curryB(3)
//
//     console.log(curryA(6)) // => 1
//
// # Task
//
// In this challenge, we're going to implement a 'curry' function for an arbitrary number of arguments.
//
// curryN will take two parameters:
//
//   * fn: The function we want to curry.
//   * n: Optional number of arguments to curry. If not supplied, `curryN` should use the fn's arity as the value for `n`.
//
// ## Example
//
//     function add3(one, two, three) {
//       return one + two + three
//     }
//
//     var curryC = curryN(add3)
//     var curryB = curryC(1)
//     var curryA = curryB(2)
//     console.log(curryA(3)) // => 6
//     console.log(curryA(10)) // => 13
//
//     console.log(curryN(add3)(1)(2)(3)) // => 6
//
// ## Conditions
//
//   * Do not use any for/while loops or Array#forEach.
//
// ## Hint
//
//   * You can detect the number of expected arguments to a function (it's arity) by checking a function's .length property.
//
// ## Boilerplate

function curryN(fn, n) {
  n = typeof n !== 'undefined' ? n : fn.length;

  if (n) {
    return function(arg) {
      return curryN(fn.bind(null, arg), n - 1);
    };
  }
  else {
    return fn();
  }
}

module.exports = curryN;

/* Official Solution
    function curryN(fn, n) {
        // If `n` argument was omitted, use the function .length property.
        if (typeof n !== 'number') n = fn.length

        function getCurriedFn(prev) {
          return function(arg) {
            // Concat the just-specified argument with the array of
            // previously-specified arguments.
            var args = prev.concat(arg)
            // Not all arguments have been satisfied yet, so return a curried
            // version of the original function.
            if (args.length < n) return getCurriedFn(args)
            // Otherwise, invoke the original function with the arguments and
            // return its value.
            else return fn.apply(this, args)
          };
        }

        // Return a curried version of the original function.
        return getCurriedFn([])
      }

      module.exports = curryN

      // Solution Source:
      // http://benalman.com/news/2012/09/partial-application-in-javascript/#manually-specifying-function-arity
*/
