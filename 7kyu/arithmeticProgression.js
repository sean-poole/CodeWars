/* Arithmetic Progression */

/* 
In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

The result should be a string of numbers, separated by comma and space.

Example: 
# first element: 1, difference: 2, how many: 5
arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"
*/

/*
P - Three arguments as integers.
R - String representing a sequence of n numbers starting from a in increments of d.
E - 
P - 
function arithmeticSequenceElements(a, d, n) {
  // Create an array variable to store integers.
  // While the length of the created array is less than the given n,
  // apply the given d increment/decrement to starting point a...
  // ... and push the result to the array.
  // Join the array with commas.
  // Return string.
}
*/

function arithmeticSequenceElements(a, d, n) {
  const nums = [a];
  while (nums.length < n) {
    a += d;
    nums.push(a);
  }

  return nums.join(", ");
}

// Alternate solution: 
// const arithmeticSequenceElements = (a, d, n) => {
//   return new Array(n).fill().map((e, i) => a + i * d).join(", ");
// }

// Test: 
// console.log(arithmeticSequenceElements(1, 2, 5))
// console.log(arithmeticSequenceElements(1, 0, 5))
// console.log(arithmeticSequenceElements(1, -3, 10))
// console.log(arithmeticSequenceElements(100, -10, 10))
