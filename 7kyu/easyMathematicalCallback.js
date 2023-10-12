/* Easy Mathematical Callback */

/*
Task: 
Write the processArray function, which takes an array and a callback function as parameters. The callback function can be, for example, a mathematical function that will be applied on each element of this array. Optionally, also write tests similar to the examples below.

Examples: 
1. Array [4, 8, 2, 7, 5] after processing with function

> var myArray = [4, 8, 2, 7, 5];
> myArray = processArray(myArray,function (a) {
  return a * 2;
});

will be [ 8, 16, 4, 14, 10 ].

2. Array [7, 8, 9, 1, 2] after processing with function

> var myArray = [7, 8, 9, 1, 2];
> myArray = processArray(myArray, function (a) {
  return a + 5;
});

will be [ 12, 13, 14, 6, 7 ].
*/

/*
P - One argument as an array of integers, and one argument as a callback function.
R - Array representing the given array with the callback funciton applied to it.
E - 
processArray(arr1, function(a) { return a * 2 })  // [4, 8, 2, 7, 5]
processArray(arr2, function(a) { return a + 5 })  // [12, 13, 14, 6, 7]
P - 
function processArray(arr, callback) {
  // Apply the callback function to each element within the given array.
  // Return array of integers.
}
*/

const processArray = (arr, callback) => arr.map(e => callback(e));

// Test: 
let arr1 = [4, 8, 2, 7, 5];
let arr2 = [7, 8, 9, 1, 2];

// console.log(processArray(arr1, function(a) { return a * 2 }))
// console.log(processArray(arr2, function(a) { return a + 5 }))
