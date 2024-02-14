/* Exclamation Marks Series #17: Are They Balanced? */

/*
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?
If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples: 
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/

/*
P - Two strings containing only "!" or "?".
R - "!" = 2. "?" = 3. Return "Left" or "Right" depending on which side is heavier, otherwise "Balance".
E - 
balance("!!", "??")                     // "Right"
balance("!??", "?!!")                   // "Left"
balance("!!???!????","??!!?!!!!!!!")    // "Balance"
P - 
function balance(left, right) {
    // Map each argument to convert characters to their respective values.
    // Reduce each array of numbers and compare values.
    // Return the higher value, or balance.
}
*/

function balance(left, right) {
    left = left.split("").map(e => e === "!" ? 2 : 3).reduce((acc, c) => acc += c, 0);
    right = right.split("").map(e => e === "!" ? 2 : 3).reduce((acc, c) => acc += c, 0);

    return left > right ? "Left" : left < right ? "Right" : "Balance";
}

// Alternate solution: 
// function balance(left, right) {
//     left = [...left].reduce((acc, c) => acc += (c === "!" ? 2 : 3), 0);
//     right = [...right].reduce((acc, c) => acc += (c === "!" ? 2 : 3), 0);

//     return left > right ? "Left" : left < right ? "Right" : "Balance";
// }

// Test: 
// console.log(balance("!!", "??"))
// console.log(balance("!??", "?!!"))
// console.log(balance("!?!!", "?!?"))
// console.log(balance("!!???!????","??!!?!!!!!!!"))
