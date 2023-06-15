/* Digitize */

/*
Given a non-negative integer, return an array / a list of the individual digits in order.

Examples:
123 => [1,2,3]
1 => [1]
8675309 => [8,6,7,5,3,0,9]
*/

/*
P - One argument as an integer. Will always be >= 0.
R - Array of integers where each element represents a digit in the given integer.
E - 
digitize(123)     // [1, 2, 3]
digitize(0)       // [0]
P - 
function digitize(n) {
  // Convert the given integer to a string.
  // Split into an array where each element is a digit of the given integer.
  // Iterate through the array and change each element from a string to a number.
  // Return array of integers.
}
*/

const digitize = n => String(n).split("").map(Number);

// Test: 
// console.log(digitize(123))
// console.log(digitize(1))
// console.log(digitize(0))
// console.log(digitize(1230))
// console.log(digitize(8675309))
