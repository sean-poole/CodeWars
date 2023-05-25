/* ES6 String Addition */

/*
It is easy to join two strings together like this string1 + string2.

Another way to get the desired result would be with string1.concat(string2)

ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string.
*/

/*
P - Two arguements as strings. Can accept numbers, but they must be converted to strings within the function.
R - String representing the concatenation of the two given arguments separated with a space.
E - 
joinStrings("string1", "string2")     // "string1 string2"
joinStrings(134, 234)                 // "134 234"
P - 
function joinStrings(string1, string2) {
  // Return the arguments as a string within a template literal.
}
*/

const joinStrings = (string1, string2) => `${string1} ${string2}`;

// Test: 
// console.log(joinStrings("string1", "string2"))
// console.log(joinStrings("testing", "testing"))
// console.log(joinStrings(134, 234))
