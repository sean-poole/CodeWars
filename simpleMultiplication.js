/* Simple Multiplication */

/* 
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

// function simpleMultiplication(number) {
//     return number % 2 === 0 ? number * 8 : number * 9;
// }


// Alternate solution: 
const simpleMultiplication = number => number * (number % 2 ? 9 : 8);

// Test: 
// test1 = 2
// test2 = 1
// test3 = 8
// test4 = 4
// test5 = 5

// console.log(simpleMultiplication(test1))
// console.log(simpleMultiplication(test2))
// console.log(simpleMultiplication(test3))
// console.log(simpleMultiplication(test4))
// console.log(simpleMultiplication(test5))