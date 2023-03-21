/* Remove Duplicate Words */

/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:
'alpha beta gamma delta'
*/

/*
P - String of words.
R - String of only the first occurrence of given words.
E - removeDuplicateWords("a b b g g g d a b b g g g d")     // "a b g d"
P - 
function removeDuplicateWords(s) {
    // Create a new Set derived from the given string split into an array.
    // Return the joined Set.
}
*/

const removeDuplicateWords = s => [...new Set(s.split(" "))].join(" ");

// Alternate solution: 
// function removeDuplicateWords(s) {
//     let unique = [];
//     for (word of s.split(" ")) {
//         if (!unique.includes(word)) unique.push(word);
//     }

//     return unique.join(" ");
// }

// Test: 
// console.log(removeDuplicateWords("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))
