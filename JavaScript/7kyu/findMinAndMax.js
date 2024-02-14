/* Find Min and Max */

/*
Implement a function that returns the minimal and the maximal value of a list (in this order).
*/

/*
P - One argument as an array of integers
R - Array of integers representing the minimal & maximal value of the given arrays.
E - 
getMinMax([1])        // [1, 1]
getMinMax([1, 2])     // [1, 2]
getMinMax([2, 1])     // [1, 2]
P - 
function getMinMax(arr) {
  // Destructure the given array.
  // Apply Math.min & Math.max to the destructured array.
  // Return array of two integers.
}
*/

const getMinMax = arr => [Math.min(...arr), Math.max(...arr)];

// Test: 
// console.log(getMinMax([1]))
// console.log(getMinMax([1, 2]))
// console.log(getMinMax([2, 1]))
