/* Find The Stray Number */

/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples: 
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

const stray = numbers => numbers.find(x => numbers.indexOf(x) === numbers.lastIndexOf(x));

// Alternate solution:
// const stray = numbers => numbers.reduce((a, b) => a ^ b);

// Test: 
// console.log(stray([1, 1, 2]))
// console.log(stray([17, 17, 3, 17, 17, 17, 17]))
