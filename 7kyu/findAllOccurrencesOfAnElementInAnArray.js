/* Find All Occurrences Of An Element In An Array */

/*
Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

If n is not in the given array, return an empty array [].

Assume that n and all values in the given array will always be integers.

Example:
findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
*/

/*
P - One argument as an array of integers, and one argument as an integer.
R - Array of integers representing the index positions of the given integer within the given array.
E - findAll([6, 9, 3, 4, 3, 82, 11], 3)    // [2, 4]
P - 
function findAll(array, n) {
  // Create an empty array to store index positions.
  // Iterate through the given array.
  // If the current element is equal to the given integer, push its index position to the created array.
  // Return array of integers.
}
*/

function findAll(array, n) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) result.push(i);
  }

  return result;
}

// Test: 
// console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3))
// console.log(findAll([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16))
// console.log(findAll([20, 20, 10, 13, 15, 2, 7, 2, 20, 3, 18, 2, 3, 2, 16, 10, 9, 9, 7, 5, 15, 5], 20))
