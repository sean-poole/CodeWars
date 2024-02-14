/* Regex Basics - Is It A Digit */

/*
Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
*/

/*
P - One argument as a string.
R - Boolean representing if the given string can be converted to an integer between 0 - 9.
E - 
"".digit()    // false
"7".digit()   // true
" ".digit()   // false
"a".digit()   // false
"a5".digit()  // false
"14".digit()  // false
P - 
String.prototype.digit = function() {
  // Test if the given string is a digit between 0 - 9.
  // Return boolean.
}
*/

String.prototype.digit = function() {
  return /^[0-9]$/.test(this);
}

// Test: 
// console.log("".digit())
// console.log("7".digit())
// console.log(" ".digit())
// console.log("a".digit())
// console.log("a5".digit())
// console.log("14".digit())
