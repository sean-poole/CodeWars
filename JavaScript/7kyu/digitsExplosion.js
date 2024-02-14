/* Digits Explosion */

/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"
explode("102269")
should return :

"12222666666999999999"
*/

const explode = s => s.split("").map(e => e.repeat(e)).join("");

// Test: 
// console.log(explode("312"))
// console.log(explode("102269"))
// console.log(explode("0"))
// console.log(explode("000"))
// console.log(explode("123"))
