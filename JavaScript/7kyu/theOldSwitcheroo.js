/* The Old Switcheroo */

/* 
Write a function
> vowel2index(str)

that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:
> vowel2index('this is my string') == 'th3s 6s my str15ng'
> vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
> vowel2index('') == ''

Your function should be case insensitive to the vowels.
*/

/* 
P - One argument as a string.
R - Given string with vowels replaced with their respective position within that string.
E - 
vowel2index("this is my string")                        // th3s 6s my str15ng"
vowel2index("Codewars is the best site in the world")   // "C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld"
P - 
function vowel2index(str) {
    // Split the given string into an array where each element represents a character / letter.
    // Iterate through the array and check if each letter is a vowel.
    // If it is a vowel, replace it with its respective position in the array.
    // Else, leave it as is.
    // Join the array and return the formatted string.
}
*/

const vowels = "aeiou";
const vowel2index = str => str.split("").map((c, i) => vowels.includes(c) ? c = i + 1 : c).join("");

// Alternate solution: 
// const vowel2index = str => str.replace(/[aeiou]/ig, (m, i) => i + 1);

// Test: 
// console.log(vowel2index("this is my string"))
// console.log(vowel2index("Codewars is the best site in the world"))
// console.log(vowel2index("Tomorrow is going to be raining"))
// console.log(vowel2index(""))
