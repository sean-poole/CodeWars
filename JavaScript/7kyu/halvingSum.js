/* Halving Sum */

/*
Task: 
Given a positive integer n, calculate the following sum:
> n + n/2 + n/4 + n/8 + ...

All elements of the sum are the results of integer division.

Example: 
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/

/*
P - One argument as an integer. Will always be (+).
R - Integer representing the sum of all elements as a result of integer division.
E - 
halvingSum(25)    // 47
halvingSum(127)   // 247
P - 
function halvingSum(n) {
  // Create an array to store integers.
  // While n > 1,
  // Divide n by 2 and round down. Reassign n to this value.
  // Push this value to the created array.
  // Reduce the sum of all elements in the array.
  // Return integer.
}
*/

function halvingSum(n) {
  let result = [n];
  while (n > 1) {
    n = Math.floor(n / 2);
    result.push(n);
  }

  return result.reduce((acc, c) => acc += c, 0);
}

// Test: 
// console.log(halvingSum(25))
// console.log(halvingSum(127))
