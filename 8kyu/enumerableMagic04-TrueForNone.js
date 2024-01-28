/* Enumberable Magic #04 - True For None */

/*
Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.
*/

/*
P - One argument as an array of integers. One argument as a function returning a boolean.
R - Boolean representing if every element of the given array does not return true when passed into the given function.
E - 
none([1, 2, 3, 4, 5], function(item) { return item > 5 })   // true
none([1, 2, 3, 4, 5], function(item) { return item > 4 })   // false
P - 
function none(arr, fun) {
  // Iterate through the given array.
  // Pass the current element as an argument to the given function.
  // If the evaluation from the function returns true, return false.
  // Return boolean.
}
*/

function none(arr, fun) {
  for (let int of arr) {
    if (fun(int) === true) {
      return false;
    }
  }

  return true;
}

// Alternate solution: 
// const none = (arr, fun) => !arr.some(fun);

// Test: 
// console.log(none([1, 2, 3, 4, 5], function(item) { return item > 5 }))
// console.log(none([1, 2, 3, 4, 5], function(item) { return item > 4 }))
