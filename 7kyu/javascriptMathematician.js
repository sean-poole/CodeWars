/* Javascript Mathematician */

/*
You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.

The function should contain at least 1 argument per set.

calculate(1)(1) // should return 2
calculate(1,1)(1) // should return 3
calculate(1,1)(1,-1) // should return 2
calculate(2,4)(3,7,1) // should return 17
*/

/*
P - Two sets of arguments of arbitrary length. ie: (x)(x) or (x, y)(x, y, z). Can be (+), (-), or 0.
R - Sum of the values of all the arguments.
E - 
calculate(1)(1)           // 2
calculate(1, 1)(1)        // 3
P - 
function calculate() {
    // Deconstruct arguments.
    // Add all elements of each deconstructed argument to an empty array.
    // Reduce the values and return the sum.
}
*/

const calculate = (...x) => (...y) => [...x, ...y].reduce((acc, c) => acc += c, 0);

// Alternate solution: 
// function calculate(...a) {
//     return function (...b) {
//         return [...a, ...b].reduce((acc, c) => acc += c, 0);
//     }
// }

// Test: 
// console.log(calculate(1)(1))
// console.log(calculate(1, 1)(1))
// console.log(calculate(1, 1)(1, -1))
// console.log(calculate(2, 4)(3, 7, 1))
