/* Find Numbers Which Are Divisible By Given Number */

/*
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/

/*
P - Two arguments: An array of numbers and a single integer.
R - Array of numbers from the given array that are divisible by the given integer.
E - 
divisibleBy([1,2,3,4,5,6], 2)       // [2, 4, 6]
divisibleBy([0], 4)                 // [0]
divisibleBy([1,3,5], 2)             // []
P - 
function divisibleBy(numbers, divisor) {
    // Filter the given array to check if elements are divisible by the given integer.
    // Return result.
}
*/

const divisibleBy = (numbers, divisor) => numbers.filter(n => n % divisor === 0);

// Test: 
// console.log(divisibleBy([1,2,3,4,5,6], 2))
// console.log(divisibleBy([1,2,3,4,5,6], 3))
// console.log(divisibleBy([0,1,2,3,4,5,6], 4))
// console.log(divisibleBy([0], 4))
// console.log(divisibleBy([1,3,5], 2))
