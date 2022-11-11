/* Duplicate Encoder */

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word) {
    let obj = {};
    let encoder = [];
    arr = word.toLowerCase().split("");
    for (e of arr) {
        if (obj[e]) {
            obj[e] += 1;
        } else {
            obj[e] = 1;
        }
    }

    for (e of arr) {
        if (obj[e] > 1) {
            encoder.push(")");
        } else {
            encoder.push("(");
        }
    }
    return encoder.join("");
}

// Alternate solution: 
// const duplicateEncode = word => {
//     return word
//         .toLowerCase()
//         .split("")
//         .map((e, i, w) => w.indexOf(e) == w.lastIndexOf(e) ? "(" : ")")
//         .join("");
// }

// Test: 
// console.log(duplicateEncode("din"))
// console.log(duplicateEncode("recede"))
// console.log(duplicateEncode("Success"))
// console.log(duplicateEncode("(( @"))
