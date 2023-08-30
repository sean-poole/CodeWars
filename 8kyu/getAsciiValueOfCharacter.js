/* Get Ascii Value Of Character */

/*
Get ASCII value of a character.
For the ASCII table you can refer to http://www.asciitable.com/
*/

/*
P - One string as an argument.
R - Integer representing Ascii value of the given string.
E - 
getASCII("A")     // 65
getASCII(" ")     // 32
getASCII("!")     // 33
P - 
function getASCII(c) {
  // Apply 'charCodeAt' method to the given string.
  // Return integer.
}
*/

const getASCII = c => c.charCodeAt(0);

// Test: 
// console.log(getASCII("A"))
// console.log(getASCII(" "))
// console.log(getASCII("!"))
