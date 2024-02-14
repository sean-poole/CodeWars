/* Merging Sorted Integer Arrays */

/*
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
*/

/*
P - Two arguments as integer arrays.
R - Array of integers representing the given arrays merged together with no duplicates.
E - 
mergeArrays([1, 3, 5], [2, 4, 6])   // [1, 2, 3, 4, 5, 6]
mergeArrays([2, 4, 8], [2, 4, 6])   // [2, 4, 6, 8]
P - 
function mergeArrays(a, b) {
  // Concatenate the given arrays.
  // Pass the combined array to a new set.
  // Sort the new array.
  // Return array of integers.
}
*/

const mergeArrays = (a, b) => [...new Set(a.concat(b))].sort((a, b) => a - b);

// Test: 
// console.log(mergeArrays([1, 3, 5], [2, 4, 6]))
// console.log(mergeArrays([2, 4, 8], [2, 4, 6]))
