/* Enumerable Magic #2 - True For Any? */

/*
Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.
*/

/*
P - One argument as an array and one argument as a function.
R - Boolean representing the truthy result of any element within the given array passed into the given function. If none return true, return false.
E - 
any([1,2,3,4], function(v,i){return v>3})   // true
any([1,2,3,4], function(v,i){return v>4})   // false
P - 
function any(arr, fun) {
  // Iterate through the given array.
  // Pass the current element into the given function.
  // If the function returns true, return true.
  // Else, continue iterating.
  // If all elements are passed into the function without a truthy result, return false.
}
*/

function any(arr, fun) {
  for (el of arr) {
    if (fun(el) === true) return true;
  }

  return false;
}

// Alternate solution: 
// const any = (arr, fun) => arr.some(fun);

// Test: 
// console.log(any([1,2,3,4], function(v,i){return v>3}))
// console.log(any([1,2,3,4], function(v,i){return v>4}))
