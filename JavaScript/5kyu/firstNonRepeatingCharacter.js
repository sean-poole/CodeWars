/* First Non-repeating Character */

/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

/*
P - One argument as a string.
R - String representing the first non-repeating letter of the given string. Casing does not matter for comparison, but correct casing should be returned.
E - 
firstNonRepeatingLetter("a")        // "a"
firstNonRepeatingLetter("stress")   // "t"
P - 
function firstNonRepeatingLetter(s) {
    // Split the string into an array.
    // Iterate through the array and compare indexOf(currentElement) === lastIndexOf(currentElement).
    // Uppercase element === Lowercase element.
    // If indexes match, the letter is unique and should be returned.
    // Else, continue comparing elements in the array.
    // If no matches are found, return "".
}
*/

function firstNonRepeatingLetter(s) {
    let str = s.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) return s[i];
    }

    return "";
}

// Test: 
// console.log(firstNonRepeatingLetter("a"))
// console.log(firstNonRepeatingLetter("stress"))
// console.log(firstNonRepeatingLetter("streSS"))
// console.log(firstNonRepeatingLetter("moonmen"))
