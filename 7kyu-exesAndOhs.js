/* Exes And Ohs */

/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
    let x = 0;
    let o = 0;
    str.toLowerCase().split("").forEach(c => {
        if (c == "x") {
            x += 1;
        } else if (c == "o") {
            o += 1;
        } else {
            return;
        }
    });

    return x == o;
}

// Alternate solution:
// const XO = str => {
//     str = str.toLowerCase().split("");
//     return str.filter(x => x === "x").length === str.filter(x => x === "o").length;
// }

// Test: 
// console.log(XO("xo"))
// console.log(XO("xxOo"))
// console.log(XO("xxxm"))
// console.log(XO("Oo"))
// console.log(XO("ooom"))
