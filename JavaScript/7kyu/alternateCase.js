/* Alternate Case */

/* 
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

*/

const alternateCase = s => s.split("").map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join("");

// Test: 
// console.log(alternateCase("abc"))
// console.log(alternateCase("ABC"))
// console.log(alternateCase("Hello World"))
