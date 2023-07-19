/* esreveR gnirtS */

/*
Create a function called reverse for the String prototype that will allow the following functionality:

"String".reverse();// => returns "gnirtS"
"Super awesome string".reverse();// => returns "gnirts emosewa repuS"
The reverse function should NOT modify the original string.
*/

/*
P - One argument as a string.
R - String representing the given string reversed without modifying it.
E - 
reverse("gnirtS")           // "String"
reverse("gnirts rehtonA")   // "Another string"
P - 
String.prototype.reverse = function(string) {
  // Split the given string into an array.
  // Reverse the order of elements in the array.
  // Join the array.
  // Return string.
}
*/

String.prototype.reverse = function(string) {
  return this.split("").reverse().join("");
}

// Test: 
// console.log("gnirtS".reverse())
// console.log("gnirts rehtonA".reverse())
