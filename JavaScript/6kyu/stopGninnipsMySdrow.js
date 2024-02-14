/* Stop gninnipS My sdroW! */

/* 
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

/*
P - One argument as a string. Will only contain letters and spaces.
R - Given string with words of 5+ letters reversed.
E - 
spinWords("Welcome")                // "emocleW"
spinWords("This is another test")   // "This is rehtona test"
P - 
function spinWords(string) {
    // Split the given string where each element represents a word.
    // Iterate through the array and look for elements.length >= 5.
    // If length >= 5, reverse the word.
    // Else, continue.
    // Return joined array as a string.
}
*/

const spinWords = string => string.split(" ").map(word => word.length >= 5 ? word.split("").reverse().join("") : word).join(" ");

// Test: 
// console.log(spinWords("Welcome"))
// console.log(spinWords("Hey fellow warriors"))
// console.log(spinWords("This is a test"))
// console.log(spinWords("This is another test"))
// console.log(spinWords("You are almost to the last test"))
// console.log(spinWords("Just kidding there is still one more"))
// console.log(spinWords("Seriously this is the last one"))
