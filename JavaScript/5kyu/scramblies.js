/* Scramblies */

/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:
> Only lower case letters will be used (a-z). No punctuation or digits will be included.
> Performance needs to be considered.

Examples: 
> scramble('rkqodlw', 'world') ==> True
> scramble('cedewaraaossoqqyt', 'codewars') ==> True
> scramble('katas', 'steak') ==> False
*/

/* 
P - Two arguments as strings. 
R - True / false based on if str1 contains the letters that make up str2.
E - 
scramble("rkqodlw", "world")                // true
scramble("cedewaraaossoqqyt", "codewars")   // true
scramble("katas", "steak")                  // false
P - 
function scramble(str1, str2) {
    // Create an object and store the letters of str1 as keys with the number of occurences as values.
    // Iterate through str2 and verify that every letter is stored in str1 object.
    // Return true / false.
}
*/

function scramble(str1, str2) {
    let occurences = str1.split("").reduce((acc, c) => { acc[c] ? acc[c]++ : acc[c] = 1; return acc; }, {});
    return str2.split("").every((letter => --occurences[letter] >= 0));
}

// Test: 
// console.log(scramble("rkqodlw", "world"))
// console.log(scramble("cedewaraaossoqqyt", "codewars"))
// console.log(scramble("katas", "steak"))
// console.log(scramble("javscripts", "javascript"))
