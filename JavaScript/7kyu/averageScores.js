/* Average Scores */

/*
Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

The array will never be empty.
*/

/*
P - One argument as an array of integers.
R - Integer representing the average of the given array, rounded to the nearest whole number.
E - 
average([49, 3, 5, 300, 7])               // 73
average([90, 98, 89, 100, 100, 86, 94])   // 94
P - 
function average(scores) {
  // Reduce the given array to get the sum of integers.
  // Divide the sum by the length of the given array.
  // Round the quotient to the nearest whole number.
  // Return integer.
}
*/

const average = scores => Math.round(scores.reduce((acc, c) => acc += c, 0) / scores.length);

// Test: 
// console.log(average([49, 3, 5, 300, 7]))
// console.log(average([90, 98, 89, 100, 100, 86, 94]))
