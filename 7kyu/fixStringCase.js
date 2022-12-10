/* Fix String Case */

/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

For example:
solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/

function solve(s) {
    let lowerCount = 0;
    let upperCount = 0;
    s.split("").forEach(c => c === c.toLowerCase() ? lowerCount++ : upperCount++)
    return lowerCount >= upperCount ? s.toLowerCase() : s.toUpperCase();
}

// Alternate solution:
// const solve = s => s.split("").reduce((a, e) => e === e.toUpperCase() ? a + 1 : a - 1, 0) > 0 ? s.toUpperCase() : s.toLowerCase();

// Test: 
// console.log(solve("code"))
// console.log(solve("CODe"))
// console.log(solve("COde"))
// console.log(solve("Code"))
