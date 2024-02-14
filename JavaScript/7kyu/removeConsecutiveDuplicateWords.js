/* Remove Consecutive Duplicate Words */

/*
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
--> "alpha beta gamma delta alpha beta gamma delta"

Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.
*/

/*
P - One argument as a string. Words will be separated with a space. String can be empty.
R - Given string with consecutive duplicate words removed
E - 
removeConsecutiveDuplicates("")                                 // ""
removeConsecutiveDuplicates("alpha beta alpha")                 // "alpha beta alpha"
removeConsecutiveDuplicates("alpha alpha beta alpha alpha")     // "alpha beta alpha"
P - 
function removeConsecutiveDuplicates(string) {
    // Create an empty array to store unique words.
    // Split the string into an array where each element represents a word.
    // Iterate through the array.
    // Compare the current element with the element at index + 1.
    // If they are unique, push the element to the array.
    // Join the array into a string and return the string.
}
*/

function removeConsecutiveDuplicates(string) {
    let words = [];
    let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) words.push(arr[i]);
    }

    return words.join(" ");
}

// Alternate solution: 
// const removeConsecutiveDuplicates = string => string.split(" ").filter((e, i, a) => e !== a[i - 1]).join(" ");

// Test: 
// console.log(removeConsecutiveDuplicates(""))
// console.log(removeConsecutiveDuplicates("alpha"))
// console.log(removeConsecutiveDuplicates("alpha beta alpha"))
// console.log(removeConsecutiveDuplicates("alpha alpha beta alpha alpha"))
