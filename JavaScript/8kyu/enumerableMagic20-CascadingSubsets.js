/* Enumerable Magic #20 - Cascading Subsets */

/*
Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.
*/

/*
P - Two arguments: One array of integers, one integer.
R - Array of subset arrays of n length derived from the given array.
E - 
eachCons([1, 2, 3, 4], 1)   // [ [1], [2], [3], [4] ]
eachCons([1, 2, 3, 4], 2)   // [ [1, 2], [2, 3], [3, 4] ]
eachCons([], 3)             // []
P - 
function eachCons(array, n) {
  // Create an empty array variable.
  // Iterate through the given array.
  // Slice a copy of length n from the current index and push to the created array.
  // Return array of subarrays.
}
*/

function eachCons(array, n) {
  let result = [];
  for (let i = 0; i <= array.length - n; i++) {
    result.push(array.slice(i, i + n));
  }

  return result;
}

// Test: 
const list = [3, 5, 8, 13]

// console.log(eachCons(list, 1))
// console.log(eachCons(list, 2))
// console.log(eachCons(list, 3))
// console.log(eachCons([], 3))
