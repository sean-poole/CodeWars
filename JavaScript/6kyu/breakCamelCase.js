/* Break Camel Casing */

/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example: 
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
    let result = [];
    string.split("").forEach(c => {
        c == c.toUpperCase() ? result.push(" ", c) : result.push(c);
    });

    return result.join("");
}

// Alternate solution:
// const solution = string => [...string].map(c => {
//     return c === c.toUpperCase() ? ` ${c}` : c;
// }).join("");

// Test: 
// console.log(solution("camelCasing"))
// console.log(solution("camelCasingTest"))
