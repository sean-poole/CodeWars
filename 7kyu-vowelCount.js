/* Vowel Count */

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    let count = 0;
    
    str.toLowerCase().split("").forEach(c => {
        switch (c) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                count += 1;
            default:
                return;
        }
    });
    
    return count;
}

// Alternate solution: 
// function getCount(str) {
//     let count = 0;
//     str.toLowerCase().split("").forEach(c => {
//         if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
//             count += 1
//         }
//     });

//     return count;
// }

// Test:
// test = "abracadabra"
// console.log(getCount(test))
