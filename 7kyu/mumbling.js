/* Mumbling */

/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// function accum(s) {
//     let arr = s.toLowerCase().split("");
//     return arr.map(c => c.toUpperCase() + c.repeat(arr.indexOf(c))).join("-");
// }

const accum = s => s.toUpperCase().split("").map((c, i) => c + c.repeat(i).toLowerCase()).join("-");

// Alternate solution: 
// function accum(s) {
//     let arr = [];
//     for (let i = 0; i < s.length; i++) {
//         arr.push(format(s[i], i + 1));
//     }
//     return arr.join("-");
// }

// function format(str, num) {
//     let letter = str.toUpperCase();

//     while (letter.length !== num) {
//         letter += str.toLowerCase();
//     }
//     return letter;
// }

// Test: 
// console.log(accum("ZpglnRxqenU"))
// console.log(accum("NyffsGeyylB"))
// console.log(accum("MjtkuBovqrU"))
// console.log(accum("EvidjUnokmM"))
// console.log(accum("HbideVbxncC"))
