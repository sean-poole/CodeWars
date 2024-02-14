/* Two Numbers Are Positive */

/*
Task:
Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

Examples:
twoArePositive(2, 4, -3) == true
twoArePositive(-4, 6, 8) == true
twoArePositive(4, -6, 9) == true
twoArePositive(-4, 6, 0) == false
twoArePositive(4, 6, 10) == false
twoArePositive(-14, -3, -4) == false
*/

/*
P - Three arguments as integers.
R - Boolean representing if there are at least two positive integers in the given arguments.
E - 
twoArePositive(2, 4, -3)      // true
twoArePositive(-4, 6, 8)      // true
twoArePositive(4, -6, 9)      // true
twoArePositive(-4, 6, 0)      // false
twoArePositive(4, 6, 10)      // false
twoArePositive(-14, -3, -4)   // false
P - 
function twoArePositive(a, b, c) {
  // Store the given arguments into an array.
  // Filter the array for elements greater than 0.
  // Check if the length of the filtered array is equal to 2.
  // Return boolean.
}
*/

function twoArePositive(a, b, c) {
  return [...arguments].filter(e => e > 0).length === 2;
}

// Test: 
// console.log(twoArePositive(2, 4, -3))
// console.log(twoArePositive(-4, 6, 8))
// console.log(twoArePositive(4, -6, 9))
// console.log(twoArePositive(4, 6, 0))
// console.log(twoArePositive(-4, 6, 0))
// console.log(twoArePositive(4, 6, 10))
// console.log(twoArePositive(-14, -3, -4))
