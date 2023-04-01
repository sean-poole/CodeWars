/* Add Length */

/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output): 
"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/

/*
P - String of words separated by spaces. String will contain at least one word.
R - Array of words contained in the given string along with each word's length.
E - addLength("apple ban")          // ["apple 5", "ban 3"]
P - 
function addLength(str) {
    // Split the given string into an array of words.
    // Map each element to include the length of the element.
    // Return array.
}
*/

const addLength = str => str.split(" ").map(e => e + ` ${e.length}`);

// Test: 
// console.log(addLength("apple ban"))
