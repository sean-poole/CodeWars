/* Sum Of All Arguments */

/*
Write a function that finds the sum of all its arguments.

eg:
sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15
*/

const sum = (...args) => [...args].reduce((acc, c) => acc += c, 0);

// Test: 
// console.log(sum(1))
// console.log(sum(1, 2))
// console.log(sum(5, 7, 9))
// console.log(sum(12, 1, 1, 1, 1))
// console.log(sum(12, 1, 1, 1, 1, 1, 1))
