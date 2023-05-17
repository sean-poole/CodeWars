/* Nice Array */

/*
A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

examples:
[2, 10, 9, 3] is a nice array because
> 2 =  3 - 1
> 10 =  9 + 1
> 3 =  2 + 1
> 9 = 10 - 1

[4, 2, 3] is a nice array because
> 4 = 3 + 1
> 2 = 3 - 1
> 3 = 2 + 1 (or 3 = 4 - 1)

[4, 2, 1] is a not a nice array because
> for n = 4, there is neither n - 1 = 3 nor n + 1 = 5

Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.
*/

/*
P - One argument as an array of integers.
R - Boolean representing if for every integer in the array, there is also an element of (n - 1) or (n + 1) in the array.
E - 
isNice([2, 10, 9, 3])   // true
isNice([3, 4, 5, 7])    // false
P - 
function isNice(arr) {
  // Iterate through the array.
  // For every element, check if there is also a value of (n - 1) or (n + 1).
  // Return Boolean.
}
*/

const isNice = arr => arr.length !== 0 ? arr.every(e => arr.includes(e - 1) || arr.includes(e + 1)) : false;

// Alternate solution: 
// const isNice = arr => !!arr.length && arr.every(e => arr.some(x => x === e - 1 || x === e + 1));

// Test: 
// console.log(isNice([2, 10, 9, 3]))
// console.log(isNice([3, 4, 5, 7]))
