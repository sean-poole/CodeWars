/* Short Long Short */

/*
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

For example: (Input1, Input2) --> output
("1", "22") --> "1221"
("22", "1") --> "1221"
*/

/*
P - Two arguments in the form of strings. Strings will not be the same length. "1", "23"
R - One string representing the two given strings concatenated together with the shorter string surrounding the longer string.
E - 
solution("45", "1")     // "1451"
solution("Soon", "Me")  // "MeSoonMe"
P - 
function solution(a, b) {
    // Conditional to determine which argument is longer in length.
    // Concatenate the arguments starting and ending with the shorter string.
    // Return string.
}
*/

const solution = (a, b) => a.length < b.length ? a.concat(b).concat(a) : b.concat(a).concat(b);

// Test: 
// console.log(solution("45", "1"))
// console.log(solution("13", "200"))
// console.log(solution("Soon", "Me"))
// console.log(solution("U", "False"))
