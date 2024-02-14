/* CamelCase Method */

/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/

const camelCase = str => str.split(" ").filter(word => word !== "").map(word => word[0].toUpperCase() + word.slice(1, word.length)).join("");

// Test: 
// console.log(camelCase("test case"))
// console.log(camelCase("camel case method"))
// console.log(camelCase("say hello "))
// console.log(camelCase(" camel case word"))
// console.log(camelCase(""))
