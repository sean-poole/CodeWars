/* Get Decimal Part Of The Given Number */

/*
Write a function that returns only the decimal part of the given number.
You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

Examples: 
getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2
*/

/*
P - One argument as an integer. (+) or (-). Will not be infinite, NaN, etc.
R - Interger representing only what follows the given decimal number. (+). Whole number returns 0.
E - 
getDecimal(10)      // 0
getDecimal(-1.2)    // 0.2
getDecimal(4.5)     // 0.5
P - 
function getDecimal(n) {
    // Subtract the absolute value of n by the absolute value of n rounded down.
}
*/

const getDecimal = n => Math.abs(n) - Math.floor(Math.abs(n));

// Alternate solution: 
// const getDecimal = n => Math.abs(n % 1);

// Test: 
// console.log(getDecimal(10))
// console.log(getDecimal(-1.2))
// console.log(getDecimal(4.5))
