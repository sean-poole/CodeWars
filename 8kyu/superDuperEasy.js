/* Super Duper Easy */

/*
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
*/

/*
P - Number. (+) or (-). Decimals are accepted.
R - Given number multiplied by 50 and increased by 6.
E - 
problem("hello")        // "Error"
problem(1)              // 56
problem(1.2)            // 66
problem(-3)             // -144
P - 
function problem(x) {
    // Check if the argument is a number.
    // Apply the formula if x is a number
    // Otherwise, return an error.
}
*/

const problem = x => typeof x === "number" ? x * 50 + 6 : "Error";

// Test: 
console.log(problem("hello"))
console.log(problem(1))
console.log(problem(5))
console.log(problem(0))
console.log(problem(1.2))
console.log(problem(""))
