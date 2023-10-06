/* Lucky Number */

/*
Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.

1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.

Function will return true for lucky numbers and false for others.
*/

/*
P - One argument as an integer.
R - Boolean representing if the sum of the given integer's digits is divisble by 9.
E - 
isLucky(1892376)    // true
isLucky(189237)     // false
isLucky(1098)       // true
isLucky(22869)      // true
isLucky(0)          // true
P - 
function isLucky(n) {
  // Convert the given integer to a string.
  // Split the string into an array.
  // Reduce the array to calculate the sum of digits.
  // If the sum is 0 or is divisibly by 9, return true.
  // Else, return false.
}
*/

function isLucky(n) {
  let sum = String(n).split("").reduce((acc, c) => acc += +c, 0);
  return sum === 0 || sum % 9 === 0;
}

// Alternate solution: 
// const isLucky = n => n % 9 === 0;

// Test: 
// console.log(isLucky(1892376))
// console.log(isLucky(189237))
// console.log(isLucky(1098))
// console.log(isLucky(22869))
// console.log(isLucky(0))
