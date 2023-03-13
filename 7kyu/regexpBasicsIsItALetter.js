/* Regexp Basics - Is It A Letter? */

/*
Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.
*/

/*
P - String.
R - Boolean whether given string is a single letter.
E - 
"a".isLetter()      // true
"7".isLetter()      // false
"ab".isLetter()     // false
P - 
String.prototype.isLetter = function() {
    // Test if string matches a letter of a-z regardless of casing.
}
*/

String.prototype.isLetter = function() {
    return (/^[a-z]$/i).test(this);
}

// Test: 
// console.log("".isLetter())
// console.log("a".isLetter())
// console.log("X".isLetter())
// console.log("7".isLetter())
// console.log("*".isLetter())
// console.log("ab".isLetter())
// console.log("a\n".isLetter())
