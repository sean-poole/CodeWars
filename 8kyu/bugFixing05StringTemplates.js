/* Bug Fixing #5 - String Templates */

/*
Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
*/

/*
P - Any number of arguments passed in as a string.
R - String combining the given arguments and prepended with "I like.."
E - 
buildString("Chocolate")                        // "I like Chocolate!"
buildString("Cheese", "Milk", "Chocolate")      // "I like Cheese, Milk, Chocolate!"
P - 
function buildString(...template) {
    // Correct the function to use template literals.
    // Join the given arguments with ", "
    // Return the string.
}
*/

const buildString = (...template) => `I like ${template.join(", ")}!`;

// Test: 
// console.log(buildString("Cheese", "Milk", "Chocolate"))
// console.log(buildString("Cheese", "Milk"))
// console.log(buildString("Chocolate"))
