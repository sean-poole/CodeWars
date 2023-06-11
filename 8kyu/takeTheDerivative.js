/* Take The Derivative */

/*
This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

For example:
derive(7, 8)
In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.
> derive(7, 8) --> this should output "56x^7" 
> derive(5, 9) --> this should output "45x^8" 

Notes:
The output of this function should be a string
The exponent will never be 1, and neither number will ever be 0
*/

/*
P - Two arguments as integers.
R - String representing the product of the given arguments, "x^", then 1 subtracted from the second argument.
E - 
derive(7, 8)    // "56x^7"
derive(5, 9)    // "45x^8"
P - 
function derive(coefficient, exponent) {
  // Multiply the given arguments.
  // Subtract 1 from the second argument.
  // Format string as `${product}x^${exponent - 1}.
  // Return string.
}
*/

const derive = (coefficient, exponent) => `${coefficient * exponent}x^${exponent - 1}`;

// Test: 
// console.log(derive(7, 8))
// console.log(derive(5, 9))
