/* Simple Comparison */

/*
Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().
*/

/*
P - Two arguments as numbers or strings.
R - Boolean representing if the given arguments are the same value, regardless of type.
E - 
add("1", 1)       // true
add(1, "1")       // true
add(1, "0")       // false
add("11", 11)     // true
add(12, 12)       // true
add(120, "021")   // false
P - 
function add(a, b) {
  // Compare given a & b arguments with ==.
  // Return boolean.
}
*/

const add = (a, b) => a == b;

// Test: 
// console.log(add("1", 1))
// console.log(add(1, "1"))
// console.log(add(1, "0"))
// console.log(add("11", 11))
// console.log(add(12, 12))
// console.log(add(120, "021"))
