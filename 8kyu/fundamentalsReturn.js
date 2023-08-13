/* Fundamentals: Return */

/*
Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

Please use the following function names:
addition = add
multiply = multiply
division = divide (both integer and float divisions are accepted)
modulus = mod
exponential = exponent
subtraction = subt

Note: All math operations will be: a (operation) b
*/

/*
P - 6 arithmetic functions missing return statements.
R - Completed arithmetic functions.
E - 
add(1, 2)         // 3
multiply(1, 2)    // 2
divide(1, 2)      // 2
mod(1, 2)         // 1
exponent(1, 2)    // 1
subt(1, 2)        // -1
P - 
const add = (a, b) => Add the given arguments.
const multiply = (a, b) => Multiply the given arguments.
const divide = (a, b) => Divide the given arguments.
const mod = (a, b) => Get remainder after dividing the given arguments.
const exponent = (a, b) => Raise base a by the power of b.
const subt = (a, b) => Subtract the given arguments.
*/

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const mod = (a, b) => a % b;
const exponent = (a, b) => a ** b;
const subt = (a, b) => a - b;

// Test: 
// console.log(add(1, 2))
// console.log(multiply(1, 2))
// console.log(divide(2, 1))
// console.log(mod(1, 2))
// console.log(exponent(1, 2))
// console.log(subt(1, 2))
