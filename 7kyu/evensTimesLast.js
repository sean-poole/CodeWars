/* Evens Times Last */

/* 
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
*/

/*
P - One argument as an array of integers.
R - Integer representing the sum of the given array's integers that have an even index and is multiplied by the integer at the last index.
E - evenLast([2, 3, 4, 5])  // 30
P - 
function evenLast(numbers) {
  // Iterate through the given array.
  // If the current element is odd indexed, set its value 0.
  // If the current element is even, multiply it by the last element of the array.
  // Reduce the array to calculate the sum.
  // Return integer.
}
*/

const evenLast = numbers => numbers
  .map((e, i) => i % 2 ? 0 : e * numbers[numbers.length - 1])
  .reduce((acc, c) => acc += c, 0);

// Test: 
// console.log(evenLast([2, 3, 4, 5]))
