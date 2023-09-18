/* Basic Math (Add or Subtract) */

/*
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples: 
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
*/

/*
P - One argument as a string.
R - String representing the integer calculation of the given argument.
E - 
calculate("1plus2plus3plus4")     // 10
calculate("1plus2plus3minus4")    // 2
P - 
function calculate(str) {
  // Replace "plus" in the given string with "+".
  // Replace "minus" in the given string with "-".
  // Calculate the given string with arithmetic operators.
  // Convert integer to string.
  // Return string.
}
*/

function calculate(str) {
  return eval(str.replaceAll("plus", "+").replaceAll("minus", "-")).toString();
}

// Test: 
// console.log(calculate("1plus2plus3plus4"))
// console.log(calculate("1minus2minus3minus4"))
// console.log(calculate("1plus2plus3minus4"))
