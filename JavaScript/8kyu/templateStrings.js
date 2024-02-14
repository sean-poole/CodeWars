/* Template Strings */

/*
Template Strings: 
Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings

Task: 
Your task is to return the correct string using the Template String Feature.

Input: 
Two Strings, no validation is needed.

Output: 
You must output a string containing the two strings with the word ```' are '```
*/

/*
P - Two arguments as strings.
R - String formatted as `${arg1} are ${arg2}`.
E - TempleStrings("Animals", "Good")    // "Animals are Good"
P - 
const TempleStrings = function(obj, feature) {
  // Return the two arguments with "are" between them.
}
*/

const TempleStrings = function (obj, feature) {
  return `${obj} are ${feature}`;
}

// Test: 
// console.log(TempleStrings("Animals", "Good"))
