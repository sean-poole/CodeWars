/* Counting Duplicates */

/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text) {
    characters = {};
    duplicates = 0;
    for (e of text.toLowerCase()) {
        if (characters[e]) {
            characters[e] += 1;
        } else {
            characters[e] = 1;
        }
    }

    for (c in characters) {
        if (characters[c] > 1) {
            duplicates += 1;
        }
    }

    return duplicates;
}

// Alternate solution:
// function duplicateCount(text) {
//     return text.toLowerCase().split("").filter((val, i, arr) => {
//         return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     }).length;
// }

// Test: 
// console.log(duplicateCount(""))
// console.log(duplicateCount("abcde"))
// console.log(duplicateCount("aabbcde"))
// console.log(duplicateCount("aabBcde"))
// console.log(duplicateCount("Indivisibility"))
// console.log(duplicateCount("Indivisibilities"))
