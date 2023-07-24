/* The Power Of Exponents */

/*
Create a method called power that takes two integers and returns the value of the first argument raised to the power of the second.

Unlike the Exponent Method, you should also take in account negative exponents.

Your solution won't be tested against special cases leading to undefined values (0**-2 for example)

Note: The ** operator (JS: Math.pow) has been disabled.

Examples:
> power(2, 3)   // 8
> power(4, -2)  // 0.0625
*/

/*
P - Two arguments as integers.
R - Integer representing the given base raised to the power of the given exponent.
E - 
power(2, 3)     // 8
power(4, -2)    // 0.0625
P - 
function power(base, exponent) {
  // Create a variable to store the base number.
  // Iterate from 1 to the absolute value of the given exponent.
  // Multiply the created variable by the given base.
  // If the exponent === 0, return 1.
  // If the exponent is negative, divide 1 by the created variable after multiplying the base for exponent number of times.
  // Return integer.
}
*/

function power(base, exponent) {
  let n = base;

  for (let i = 1; i < Math.abs(exponent); i++) {
    n *= base;
  }

  if (exponent === 0) return 1;
  if (exponent < 0) return 1 / n;

  return n;
}

// Test: 
// console.log(power(2, 3))
// console.log(power(4, -2))
