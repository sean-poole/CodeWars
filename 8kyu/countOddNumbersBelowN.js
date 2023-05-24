/* Count Odd Numbers Below N */

/*
Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

Expect large Inputs!
*/

/*
P - One argument as an integer.
R - Integer representing the length of an array containing odd integers less than the given number.
E - 
oddCount(15)        // 7
oddCount(15023)     // 7511
P - 
function oddCount(n) {
  // Divide the given number by 2 and round down.
  // Return number as an integer.
}
*/

const oddCount = n => Math.floor(n / 2);

// Test: 
// console.log(oddCount(15))
// console.log(oddCount(15023))
