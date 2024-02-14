/* Substituting Variables Into Strings: Padded Numbers */

/*
Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:
solution(5) // should return "Value is 00005"
*/

function solution(value) {
    value = value.toString().split("")
    while(value.length < 5) {
        value.unshift(0);
    }

    return `Value is ${value.join("")}`;
}

// Alternate solution: 
const solution = value => `Value is ${("00000" + value).slice(-5)}`;

// Test: 
// console.log(solution(5))
// console.log(solution(1204))
// console.log(solution(109))
// console.log(solution(0))
