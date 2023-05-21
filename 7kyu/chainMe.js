/* Chain Me */

/*
Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

chain(2, [add, mult]);
// returns 90;
*/

/*
P - Two arguments: one integer, and an array containing functions as elements.
R - Integer representing the result of the given number passed in to the array of functions.
E - chain(2, [add, mult])     // 360
P - 
function chain(input, fs) {
  // Reduce the given array argument.
  // Pass in the given integer value for the first function.
  // Pass in the result of the previous function for every other iteration.
  // Return integer.
}
*/

const chain = (input, fs) => fs.reduce((input, func) => { return func(input) }, input);

// Test: 
const add = x => x + 10;
const mult = x => x * 30;

// console.log(chain(2, [add, mult]))
