/* Alternate Capitalization */

/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/

function capitalize(s) {
    let s1 = "";
    let s2 = "";
    for (let i = 0; i < s.length; i++) {
        if (i % 2) {
            s1 += s[i].toLowerCase();
            s2 += s[i].toUpperCase();
        } else {
            s1 += s[i].toUpperCase();
            s2 += s[i].toLowerCase();
        }
    }

    return [s1, s2];
}

// Alternate solution: 
// const capitalize = s => {
//     const even = s.split("").map((e, i) => i % 2 ? e.toLowerCase() : e.toUpperCase()).join("");
//     const odd = s.split("").map((e, i) => i % 2 ? e.toUpperCase() : e.toLowerCase()).join("");
//     return [even, odd];
// }

// Test: 
// console.log(capitalize("abcdef"))
// console.log(capitalize("codewars"))
// console.log(capitalize("abracadabra"))
// console.log(capitalize("codewarriors"))
