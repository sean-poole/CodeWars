/* Convert PascalCase string into snake_case */

/*
Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

Examples: 
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"
*/

/*
P - One argument as a string.
R - Given string converted to snake case.
E - 
toUnderscore("TestController")      // test_controller
toUnderscore("App7Test")            // "app7_test"
P - 
function toUnderscore(string) {
    // Check if the given input is a string. 
    // Split the string into an array where each element represents a character.
    // Iterate through the array and map uppercase letters to lowercase and prepend an underscore.
    // Join the array and return the string.
}
*/

const toUnderscore = string => typeof(string) === "string" ? string.split("").map((e, i) => i === 0 ? e.toLowerCase() : isNaN(e) && e === e.toUpperCase() ? `_${e.toLowerCase()}` : e).join("") : string.toString();

// Test: 
// console.log(toUnderscore("TestController"))
// console.log(toUnderscore("MoviesAndBooks"))
// console.log(toUnderscore("App7Test"))
// console.log(toUnderscore("1"))
