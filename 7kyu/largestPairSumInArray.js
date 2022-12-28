/* Largest Pair Sum In Array */

/*
Given a sequence of numbers, find the largest pair sum in the sequence.

For example: 
[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

Input sequence contains minimum two elements and every element is an integer.
*/

const largestPairSum = numbers => numbers.sort((a, b) => a - b).slice(-2).reduce((acc, c) => acc += c, 0);

// Test: 
// console.log(largestPairSum([10,14,2,23,19]))
// console.log(largestPairSum([-100,-29,-24,-19,19]))
// console.log(largestPairSum([1,2,3,4,6,-1,2]))
// console.log(largestPairSum([-10, -8, -16, -18, -19]))
