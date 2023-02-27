/* Debug Sum Of Digits Of A Number */

/*
Debug function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example: 
123  => 6
223  => 7
1337 => 14
*/

const getSumOfDigits = integer => integer.toString().split("").map(Number).reduce((acc, c) => acc += c);

// Test: 
// console.log(getSumOfDigits(123))
// console.log(getSumOfDigits(223))
// console.log(getSumOfDigits(0))
