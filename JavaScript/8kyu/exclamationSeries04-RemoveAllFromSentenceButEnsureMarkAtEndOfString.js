/* Exclamation Marks Series #04 - Remove All Exclamation Marks From Sentence But Ensure An Exclamation Mark at the End of String */

/*
Description:
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
"Hi!"     ---> "Hi!"
"Hi!!!"   ---> "Hi!"
"!Hi"     ---> "Hi!"
"!Hi!"    ---> "Hi!"
"Hi! Hi!" ---> "Hi Hi!"
"Hi"      ---> "Hi!"
*/

/*
P - One argument as a string.
R - String reprensenting the given string with exclamation marks removed except for one at the end.
E - 
remove("Hi!")       // "Hi!"
remove("Hi!!!")     // "Hi!"
remove("!Hi")       // "Hi!"
remove("!Hi!")      // "Hi!"
remove("Hi! Hi!")   // "Hi Hi!"
remove("Hi")        // "Hi!"
P - 
function remove(string) {
  // Split the given string into an array.
  // Filter the array for elements that are not "!".
  // Join the filtered array.
  // Append "!" to the end of the string.
  // Return string.
}
*/

const remove = string => `${string.split("").filter(e => e !== "!").join("")}!`;

// Test: 
// console.log(remove("Hi!"))
// console.log(remove("Hi!!!"))
// console.log(remove("!Hi"))
// console.log(remove("!Hi!"))
// console.log(remove("Hi! Hi!"))
// console.log(remove("Hi"))
