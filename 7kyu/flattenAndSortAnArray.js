/* Flatten And Sort An Array */

/*
Challenge:
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

const flattenAndSort = array => array.flat().sort((a, b) => a - b);

// Alternate solution: 
// const flattenAndSort = array => [].concat(...array).sort((a, b) => a - b);

// Test: 
// console.log(flattenAndSort([]))
// console.log(flattenAndSort([[], []]))
// console.log(flattenAndSort([[], [1]]))
// console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))
// console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]))
