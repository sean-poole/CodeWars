/* Validate Code With Simple Regex */

/*
Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

You can assume the input will always be a number.
*/

/*
P - One argument as an integer.
R - Boolean representing if the given integer starts with a 1, 2, or 3.
E - 
validateCode(123)   // true
validateCode(248)   // true
validateCode(8)     // false
validateCode(321)   // true
validateCode(9453)  // false
P - 
function validateCode(code) {
  // Test if the given integer begins with a 1, 2, or 3.
  // Return boolean.
}
*/

const validateCode = code => /^[123]/.test(code);

// Test: 
// console.log(validateCode(123))
// console.log(validateCode(248))
// console.log(validateCode(8))
// console.log(validateCode(321))
// console.log(validateCode(9453))
