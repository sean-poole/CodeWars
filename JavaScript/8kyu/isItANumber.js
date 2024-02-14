/* Is It A Number */

/*
Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:
> isDigit("3")
> isDigit("  3  ")
> isDigit("-3.23")

should return false:
> isDigit("3-4")
> isDigit("  3   5")
> isDigit("3 5")
> isDigit("zero")
*/

/*
P - One argument as a string.
R - Boolean representing if the given string is a valid number.
E - 
isDigit("3")      // true
isDigit(" 3 ")    // true
isDigit(" 3 5")   // false
isDigit("zero")   // false
P - 
function isDigit(s) {
  // Check if the given string is equal to the integer representation of it.
  // Return boolean.
}
*/

const isDigit = s => s == parseFloat(s);

// Test: 
// console.log(isDigit("s2324"))
// console.log(isDigit("-234.4"))
