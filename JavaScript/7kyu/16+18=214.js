/* 16 + 18 = 214 */

/*
For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:
Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

Examples: 
> 16 + 18 = 214
> 26 + 39 = 515
> 122 + 81 = 1103
*/

/*
P - Two arguments as integers. Integers will always be >= 0.
R - Integer representing the sum of the given integers without carrying over numbers.
E - 
add(2, 11)      // 13
add(0, 0)       // 0
add(16, 18)     // 214
P - 
function add(num1, num2) {
  // Convert the given integers to strings, split into arrays where each element is a digit, and reverse the order.
  // Create a variable to store the max length between the arrays.
  // Create an empty array to store the sum of integers at each index.
  // Iterate through the arrays for the duration of max length.
  // Get the sum of the elements at each index.
  // Push values to the created array.
  // Combine values as a string, convert to integer, return integer.
}
*/

function add(num1, num2) {
  num1 = num1.toString().split("").reverse();
  num2 = num2.toString().split("").reverse();
  let max = Math.max(num1.length, num2.length);
  let result = [];

  for (let i = max - 1; i >= 0; i--) {
    result.push(Number(num1[i] || 0) + Number(num2[i] || 0));
  }

  return +result.reduce((acc, c) => acc += c.toString());
}

// Test: 
// console.log(add(2, 11))
// console.log(add(0, 1))
// console.log(add(0, 0))
// console.log(add(16, 18))
// console.log(add(26, 39))
// console.log(add(122, 81))
