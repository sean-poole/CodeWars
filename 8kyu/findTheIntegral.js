/* Find the Integral */

/*
Create a function that finds the integral of the expression passed.

In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.

For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).

Notes:
> The output should be a string.
> The coefficient and exponent is always a positive integer.

Examples: 
 3, 2  -->  "1x^3"
12, 5  -->  "2x^6"
20, 1  -->  "10x^2"
40, 3  -->  "10x^4"
90, 2  -->  "30x^3"
*/

/*
P - Two arguments as integers.
R - String representing a new coefficient and exponent derived from the given integers.
E - 
integrate(3, 2)       // "1x^3"
integrate(12, 5)      // "2x^6"
integrate(20, 1)      // "10x^2"
integrate(40, 3)      // "10x^4"
integrate(90, 2)      // "30x^3"
P - 
function integrate(coefficient, exponent) {
  // Add 1 to the given exponent.
  // Divide the given coefficient by the new exponent.
  // Format string.
  // Return string.
}
*/

function integrate(coefficient, exponent) {
  let e = exponent + 1;
  let c = coefficient / e;

  return `${c}x^${e}`;
}

// Test: 
// console.log(integrate(3, 2))
// console.log(integrate(12, 5))
// console.log(integrate(20, 1))
// console.log(integrate(40, 3))
// console.log(integrate(90, 2))
