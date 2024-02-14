/* Be Concise III - Sum Squares */

/*
You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:
> sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
> sumSquares([7,3,9,6,5]) === 200
> sumSquares([11,13,15,18,2]) === 843

Shorten the code such that it meets the requirements.

A few hints:
Try researching about built-in Array methods; they may help shorten your code a lot
Good luck!
*/

/*
P - One argument as an array of integers.
R - Integer representing the sum of squared elements in the given array.
E - 
sumSquares([1, 2, 3, 4, 5])                           // 55
sumSquares([7, 3, 9, 6, 5])                           // 200
sumSquares([11, 13, 15, 18, 2])                       // 843
sumSquares([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])    // 110
P - 
function sumSquares(array) {
  // Iterate through the given array and square each element.
  // Reduce the array of squared elements to calculate the sum.
  // Return integer.
}
*/

const sumSquares = array => array.map(x => x ** 2).reduce((acc, c) => acc += c, 0);

// Alternate solution: 
// const sumSquares = array => array.reduce((acc, c) => acc += c ** 2, 0);

// Test: 
// console.log(sumSquares([1, 2, 3, 4, 5]))
// console.log(sumSquares([7, 3, 9, 6, 5]))
// console.log(sumSquares([11, 13, 15, 18, 2]))
// console.log(sumSquares([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]))
