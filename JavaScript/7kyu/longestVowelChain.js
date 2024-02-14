/* Longest Vowel Chain */

/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
*/

/*
P - String of alphabetic characters. All lowercase.
R - Length of the longest vowel substring as an integer.
E - solve("codewarriors")       // 2
P - 
function solve(s) {
    // Initialize variable to store longest vowel substring.
    // Initialize variable to store comparison vowel substring.
    // Iterate through the given string and add consecutive vowels to comparison variable.
    // If comparison length > previous longest string length, longest = comparison.
    // Return the longest vowel substring.
}

*/

function solve(s) {
    let result = "";
    let compare = "";
    for (c of s.split("")) {
        if ("aeiou".includes(c)) {
            compare += c;
        } else {
            compare = "";
        }

        if (compare.length > result.length) result = compare;
    }

    return result.length;
}

// Alternate solution: 
// const solve = s => s.split(/[^aeiou]/).reduce((acc, c) => Math.max(acc, c.length), 0);

// Test: 
// console.log(solve("codewarriors"))
// console.log(solve("suoidea"))
// console.log(solve("ultrarevolutionariees"))
// console.log(solve("strengthlessnesses"))
// console.log(solve("cuboideonavicuare"))
// console.log(solve("chrononhotonthuooaos"))
// console.log(solve("iiihoovaeaaaoougjyaw"))
