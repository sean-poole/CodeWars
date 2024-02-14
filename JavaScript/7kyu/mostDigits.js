/* Most Digits */

/*
Find the number with the most digits.
If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

const findLongest = array => array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a))

// Test: 
// console.log(findLongest([1, 10, 100]))
// console.log(findLongest([9000, 8, 800]))
// console.log(findLongest([8, 900, 500]))
