/* Indexed Capitalization */

/*
Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:
> capitalize("abcdef",[1,2,5]) = "aBCdeF"
> capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.

The input will be a lowercase string with no spaces and an array of digits.

Good luck!
*/

/*
P - String and an array of integers representing indices.
R - Given string where letters are capitalized at the indices in the given array.
E - 
capitalize("abcdef",[1,2,5])        // "aBCdeF"
capitaliize("indexinglessons",[0])  // "Indexinglessons"
P - 
function capitalize(s, arr) {
    // Iterate through s.
    // If arr contains current index, capitalize the letter at that index.
}
*/

function capitalize(s, arr) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        result += arr.includes(i) ? s[i].toUpperCase() : s[i];
    }

    return result;
}

// Alternate solution: 
// const capitalize = (s, arr) => [...s].map((e, i) => arr.includes(i) ? e.toUpperCase() : e).join("");

// Test: 
// console.log(capitalize("abcdef",[1,2,5]))
// console.log(capitalize("abcdef",[1,2,5,100]))
// console.log(capitalize("codewars",[1,3,5,50]))
// console.log(capitalize("abracadabra",[2,6,9,10]))
// console.log(capitalize("codewarriors",[5]))
// console.log(capitalize("indexinglessons",[0]))
