/* Remove First And Last Character Part Two */

/*
This is a spin off of my first kata.
You are given a string containing a sequence of character sequences separated by commas.
Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples: 
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/

/*
P - One argument as a string. Contains a sequence of characters separated by a comma.
R - New string containing the given character sequence without the first and last characters. Separated by spaces.
E - 
array("1,2,3,4,5")      // "2 3 4"
array("1")              // null
P - 
function array(arr) {
    // Split the given string at its commas where each element represents a character.
    // Slice a copy of the array without the first and last elements.
    // Join the array with spaces and return the new string.
}
*/

const array = arr => arr.split(",").slice(1, -1).join(" ") || null;

// Test: 
// console.log(array("1,2,3"))
// console.log(array("1,2,3,4"))
// console.log(array("1,2,3,4,5"))
// console.log(array(""))
// console.log(array("1"))
// console.log(array("1,2"))
