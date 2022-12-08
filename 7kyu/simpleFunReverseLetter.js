/* Simple Fun #176: Reverse Letter */

/*
Task: 
Given a string str, reverse it and omit all non-alphabetic characters.

Example: 
For str = "krishan", the output should be "nahsirk".
For str = "ultr53o?n", the output should be "nortlu".

Input/Output: 
[input] string str
A string consists of lowercase latin letters, digits and symbols.
[output] a string
*/

function reverseLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    return str.split("").reverse().filter(e => {
        if (alphabet.split("").includes(e)) return e;
    }).join("");
}

// Test: 
// console.log(reverseLetter("krishan"))
// console.log(reverseLetter("ultr53o?n"))
// console.log(reverseLetter("ab23c"))
// console.log(reverseLetter("krish21an"))
