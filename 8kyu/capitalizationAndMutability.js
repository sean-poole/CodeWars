/* Capitalization And Mutability */

/*
Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
*/

/*
P - One argument as a string. Will only contain one word.
R - Fix the function so it returns the given string with the first letter capitalized.
E - capitalizeWord("word")      // "Word"
P - 
function capitalizeWord(word) {
    // word[0].toUpperCase() is given.
    // Append the rest of the string to the capitalized first letter.
    // Return the string.
}
*/

const capitalizeWord = word => word[0].toUpperCase() + word.slice(1);

// Test: 
// console.log(capitalizeWord("word"))
// console.log(capitalizeWord("i"))
// console.log(capitalizeWord("glasswear"))
