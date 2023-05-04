/* Absent Vowel */

/*
Your job is to figure out the index of which vowel is missing from a given string:
> A has an index of 0,
> E has an index of 1,
> I has an index of 2,
> O has an index of 3,
> U has an index of 4.

Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples: 
> "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
> "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
*/

/* 
P - One argument as a string. String will always be valid. String will always contain all vowels except one.
R - Integer representing the missing vowel's index in "aeiou".
E - 
absentVowel("John Doe hs seven red pples under his bsket")              // 0
absentVowel("Bb Smith sent us six neatly arranged range bicycles")      // 3
P - 
function absentVowel(x) {
    // Iterate through the vowels.
    // Check if the given string contains each vowel.
    // One vowel will be missing.
    // Return the missing vowel's index in "aeiou" as an integer.
}
*/

const vowels = "aeiou";

function absentVowel(x) {
    for (vowel of vowels) {
        if (!x.includes(vowel)) return vowels.indexOf(vowel);
    }
}

// Alternate solution: 
// const absentVowel = x => vowels.split("").findIndex(vowel => !x.includes(vowel));

// Test: 
// console.log(absentVowel("John Doe hs seven red pples under his bsket"))
// console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"))
