/* Bit Counting */

/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

/*
P - One argument as an integer.
R - Integer representing the number of "1"s in the binary representation of the given integer.
E - countBits(1234)     // Binary: 10011010010  Returns: 5
P - 
function countBits(n) {
  // Convert the given integer to binary string.
  // Split the string into an array where each element is a digit.
  // Filter the array to only contain values of "1".
  // Return the length of the array as an integer.
}
*/

const countBits = n => Number(n).toString(2).split("").filter(x => x === "1").length;

// Test: 
// console.log(countBits(0))
// console.log(countBits(4))
// console.log(countBits(7))
// console.log(countBits(9))
// console.log(countBits(10))
