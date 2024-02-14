/* Collatz Conjecture */

/*
The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:
[This is writen in pseudocode]
if(number is even) number = number / 2
if(number is odd) number = 3*number + 1

#Task
Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

#Examples
hotpo(1) returns 0
(1 is already 1)

hotpo(5) returns 5
5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(6) returns 8
6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(23) returns 15
23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
*/

/*
P - One argument as an integer. Will always be positive.
R - Integer representing the number of iterations required to apply the Collatz Conjecture algorithm to the given number and return 1.
E - 
hotpo(1)    // 0
hotpo(5)    // 5
hotpo(6)    // 8
hotpo(23)   // 15
P - 
function hotpo(n) {
  // Create a variable to store count.
  // While n > 1...
  // ... if n is even, divide n by 2.
  // ... if n is odd, multiply n by 3 and add 1.
  // Increment count.
  // Continue until n === 1.
  // Return count as an integer.
}
*/

function hotpo(n) {
  let count = 0;

  while (n > 1) {
    n = n % 2 === 0 ? n / 2 : (3 * n) + 1;
    count++;
  }

  return count;
}

// Test: 
// console.log(hotpo(1))
// console.log(hotpo(5))
// console.log(hotpo(6))
// console.log(hotpo(23))
