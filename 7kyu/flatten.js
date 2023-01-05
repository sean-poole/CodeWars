/* Flatten */

/*
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/

const flatten = array => array.flat();

// Alternate solution: 
// const flatten = array => [].concat(...array);

// Test: 
// console.log(flatten([]))
// console.log(flatten([1, 2, 3]))
// console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]))
// console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]))
// console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]))
