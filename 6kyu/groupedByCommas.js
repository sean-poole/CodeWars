/* Grouped By Commas */

/*
Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

Assume: 0 <= n < 2147483647

Examples
       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235"
*/

/*
P - One argument as an integer between 0 and 2147483647
R - String representing the given integer with commas after every 3 digits.
E - 
groupByCommas(1)          // "1"
groupByCommas(10)         // "10"
groupByCommas(100)        // "100"
groupByCommas(1000)       // "1,000"
groupByCommas(10000)      // "10,000"
groupByCommas(100000)     // "100,000"
groupByCommas(1000000)    // "1,000,000"
groupByCommas(35235235)   // "35,235,235"
P - 
function groupByCommas(n) {
  // If the given n is < 1000, return n as a string.
  // Else, the given n requires commas.
  // Convert n to a string.
  // Split the string into an array of digits.
  // Reverse the order of the array.
  // Iterate through the array.
  // If the current index is divisible by 3 and is not the first element, add a comma after the digit. Else, keep the digit as is.
  // Reverse the order of the array.
  // Join the array into a string.
  // Return the given n with commas as a string.
}
*/

function groupByCommas(n) {
  if (n < 1000) return String(n);

  let digits = String(n)
    .split("")
    .reverse()
    .map((e, i) => i % 3 === 0 && i !== 0 ? `${e},` : e)
    .reverse()
    .join("");

  return digits;
}

// Test: 
// console.log(groupByCommas(1))
// console.log(groupByCommas(10))
// console.log(groupByCommas(100))
// console.log(groupByCommas(1000))
// console.log(groupByCommas(10000))
// console.log(groupByCommas(100000))
// console.log(groupByCommas(1000000))
// console.log(groupByCommas(35235235))
