/* Sum Of Cubes */

/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.
Assume that the input n will always be a positive integer.

Examples: (Input --> output)
2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/

const sumCubes = n => Array.from({length: n}, (_, i) => i + 1).map(x => x ** 3).reduce((acc, c) => acc += c, 0);

// Alternate solution: 
// const sumCubes = n => [...Array(n + 1).keys()].reduce((acc, c) => acc += c ** 3, 0);

// Test: 
// console.log(sumCubes(1))
// console.log(sumCubes(2))
// console.log(sumCubes(3))
// console.log(sumCubes(4))
// console.log(sumCubes(10))
// console.log(sumCubes(123))
