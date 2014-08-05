// # Task
//
// Convert the following code from a for-loop to Array#map:
//
//     function doubleAll(numbers) {
//       var result = []
//       for (var i = 0; i < numbers.length; i++) {
//         result.push(numbers[i] * 2)
//       }
//       return result
//     }
//
//     module.exports = doubleAll
//
// ## Arguments
//
//   * numbers: An Array of 1 to 20 Integers between 0 and 9
//
// ## Conditions
//
//   * Your solution should use Array.prototype.map()
//   * Do not use any for/while loops or Array.prototype.forEach.
//   * Do not create any unecessary functions e.g. helpers.
//
// ## Resources
//
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//
// ## Boilerplate

    //function must double the number for each index in the array
    function doubleAll(numbers) {
      //The argument will automatically be assigned to each element of the array as map loops through the original array.
      var doubled = numbers.map(function(i){
        return i*2;
      });
      return doubled;
    }

    module.exports = doubleAll;

/*
Official Solution

   module.exports = function doubleAll(numbers) {
        return numbers.map(function double(num) {
          return num * 2
        })
      }

*/
