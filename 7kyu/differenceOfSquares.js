/* Difference Of Squares */

/*
Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

Example
For example, when n = 10:
> The square of the sum of the numbers is:
> (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025
> The sum of the squares of the numbers is:
> 1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2 + 7^2 + 8^2 + 9^2 + 10^2 = 385

Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is: 3025 - 385 = 2640
*/

/*
P - One argument as an integer.
R - Integer representing the difference between the sum of the squares of the first n numbers and the square of their sum.
E - 
differenceOfSquares(5)    // 170
differenceOfSquares(10)   // 2640
differenceOfSquares(100)  // 25164150
P - 
function differenceOfSquares(n) {
  // Create an array variable to store numbers 1 to n.
  // Create a variable to store the square of the sum of n numbers.
  // Create a variable to store the sum of the squares of n numbers.
  // Subtract the sum of squares from the square of the sum.
  // Return integer.
}
*/

function differenceOfSquares(n) {
  const numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }

  const squares = numbers.reduce((acc, c) => acc += c, 0) ** 2;
  const sum = numbers.reduce((acc, c) => acc += c ** 2, 0);

  return squares - sum;
}

// Test: 
// console.log(differenceOfSquares(5))
// console.log(differenceOfSquares(10))
// console.log(differenceOfSquares(100))
