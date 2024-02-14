/* Get Number From String */

/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:
> getNumberFromString(s)
*/

/*
P - One argument as a string.
R - Integer representing number characters in the given string.
E - 
getNumberFromString("1")                      // 1
getNumberFromString("this is number: 7")      // 7
P - 
function getNumberFromString(s) {
  // Iterate through the given string.
  // Filter the array into elements that can be represented as an integer.
  // Join the array into a string.
  // Convert the string into a number and return.
}
*/

const getNumberFromString = s => Number(s.split("").filter(e => e !== " " && e == Number(e)).join(""));

// Test: 
// console.log(getNumberFromString("1"))
// console.log(getNumberFromString("123"))
// console.log(getNumberFromString("this is number: 7"))
