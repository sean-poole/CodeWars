/* Unique String Characters */

/*
In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:
solve("xyab","xzca") = "ybzc" 
> The first string has 'yb' which is not in the second string. 
> The second string has 'zc' which is not in the first string. 

Notice also that you return the characters from the first string concatenated with those from the second string.
*/

/*
P - Two arguments as strings.
R - String representing the characters that are unique to each string argument.
E - 
solve("xyab","xzca")      // "xzca"
solve("xyab","xzca")      // "ybbzc"
solve("abcd","xyz")       // "abcdxyz"
solve("xxx","xzca")       // "zca"
P - 
function solve(a, b) {
  // Split each argument into their own array where each element is a character of the string.
  // Filter the array for elements that are not included in the other argument.
  // Join each array and concatenate the second string to the first string.
  // Return String.
}
*/

const solve = (a, b) => a.split("").filter(c => !b.includes(c)).join("") + b.split("").filter(c => !a.includes(c)).join("");

// Test: 
// console.log(solve("xyab","xzca"))
// console.log(solve("xyabb","xzca"))
// console.log(solve("abcd","xyz"))
// console.log(solve("xxx","xzca"))
