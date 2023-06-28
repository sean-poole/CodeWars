/* Collatz Conjecture Length */

/*
The Collatz Conjecture states that for any positive natural number n, this process:

if n is even, divide it by 2
if n is odd, multiply it by 3 and add 1
repeat
will eventually reach n = 1.

For example, if n = 20, the resulting sequence will be:

[ 20, 10, 5, 16, 8, 4, 2, 1 ]
Write a program that will output the length of the Collatz Conjecture for any given n.
In the example above, the output would be 8.
*/

/*
P - One argument as an integer.
R - Integer representing the length of the Collatz Conjecture for the given integer.
E - 
collatz(20)   // 8
collatz(15)   // 18
P - 
function collatz(n) {
  // Create an array variable initialized with the given n.
  // While n > 1...
  // ...check if the given integer is odd or even.
  // If the integer is odd, multiply it by 3 and add 1.
  // If the integer is even, divide it by 2.
  // Add the new integer value to the created array.
  // Repeat until the integer === 1.
  // Return the number of iterations as an integer.
}
*/

function collatz(n) {
  let nums = [n];
  while (n > 1) {
    n = n % 2 ? (n * 3) + 1 : n / 2;
    nums.push(n);
  }

  return nums.length;
}

// Alternate solution: 
// const collatz = n => n > 1 ? 1 + collatz(n % 2 ? (n * 3) + 1 : n / 2) : 1;

// Test: 
console.log(collatz(20))
console.log(collatz(15))
