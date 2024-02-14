/* Binary Addition */

/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a, b) {
    let sum = a + b;
    let binary = [];
    while (sum >= 1) {
        binary.push(sum % 2);
        sum = Math.floor(sum / 2);
    }
    return binary.reverse().join("");
}

// Alternate solution:
// function addBinary(a, b) {
//     return ((a + b).toString(2));
// }

// Test: 
// console.log(addBinary(1, 1))
// console.log(addBinary(5, 9))