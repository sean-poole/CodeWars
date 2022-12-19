/* Hex Hash Sum */

/*
Complete the function that accepts a valid string and returns an integer.
Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

Examples: 
"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113
*/

const hexHash = str => str.split("").map(e => e.charCodeAt().toString(16)).join("").replace(/[^\d]/g, "").split("").reduce((acc, c) => acc + Number(c), 0);

// Test: 
// console.log(hexHash("Yo"))
// console.log(hexHash("Hello, World!"))
// console.log(hexHash("Forty4Three"))
