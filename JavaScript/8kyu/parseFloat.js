/* Parse Float */

/*
Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
*/

/*
P - One argument as a string.
R - Integer representing the given string, or null if it cannot be converted.
E - parseF("1")   // 1.0
P - 
function parseF(s) {
  // Check if the given string is not a number.
  // If true, return null.
  // Else, return the given string as an integer.
}
*/

function parseF(s) {
  return isNaN(parseFloat(s)) ? null : +s;
}

// Test: 
// console.log(parseF("1"))
