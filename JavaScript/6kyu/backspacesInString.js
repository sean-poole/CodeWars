/* Backspaces In String */

/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
Your task is to process a string with "#" symbols.

Examples: 
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

function cleanString(s) {
    let arr = [];
    s.split("").forEach(e => {
        e !== "#" ? arr.push(e) : arr.pop();
    });

    return arr.join("");
}

// Test: 
// console.log(cleanString('abc#d##c'))
// console.log(cleanString('abc####d##c#'))
// console.log(cleanString('#6+yqw8hfklsd-=-f'))
