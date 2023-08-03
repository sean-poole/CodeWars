/* Parse Integers In Array */

/*
A colleague asked if you can help him fix his function. It seems it doesn't always parse Integers correctly.

Examples:
> parseNumbers(['10']) // should return [10]
> parseNumbers(['-1','0','1']) // should return [-1,0,1]
*/

/*
P - One argument as an array of strings.
R - Array of integers derived from the given array.
E - 
parseNumbers([])
parseNumbers(["13"])
parseNumbers(["2.48"])
P - 
function parseNumbers(intStrs) {
  // Iterate through the given array.
  // Convert each element from a string to an integer.
  // Return array of integers.
}
*/

const parseNumbers = intStrs => intStrs.map(e => parseInt(e));

// Test: 
// console.log(parseNumbers([]))
// console.log(parseNumbers(["13"]))
// console.log(parseNumbers(["2.48"]))
