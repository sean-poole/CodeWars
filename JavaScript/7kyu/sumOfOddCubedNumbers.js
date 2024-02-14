/* Sum Of Odd Cubed Numbers */

/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

const cubeOdd = arr => arr.every(x => !isNaN(Number(x))) ? arr.map(x => x ** 3).reduce((acc, c) => c % 2 ? acc += c : acc, 0) : undefined;

// Test: 
// console.log(cubeOdd([1, 2, 3, 4]))
// console.log(cubeOdd([-3, -2, 2, 3]))
// console.log(cubeOdd(["a", 12, 9, "z", 42]))
