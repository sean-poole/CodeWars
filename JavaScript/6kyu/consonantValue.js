/* Consonant Value */

const { stringify } = require("querystring");

/*
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
*/

function solve(s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const vowels = "aeiou";
    let result = 0;
    let compare = 0;

    for (c in s.split("")) {
        if (!vowels.includes(s[c])) {
            compare += alphabet.indexOf(s[c]) + 1;
        } else {
            if (compare >= result) {
                result = compare;
            }
            
            compare = 0;
        }
    }

    return result;
}

// Alternate solution: 
// const solve = s => s.split(/[aeiou]+/).reduce((s, n)=> Math.max(s, n.split('').reduce((a, b)=> a + b.charCodeAt(0) - 96, 0)), 0);

// Test: 
// console.log(solve("zodiac"))
// console.log(solve("chruschtschov"))
// console.log(solve("khrushchev"))
// console.log(solve("strength"))
// console.log(solve("catchphrase"))
// console.log(solve("twelfthstreet"))
// console.log(solve("mischtschenkoana"))
