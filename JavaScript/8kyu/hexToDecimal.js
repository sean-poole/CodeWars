/* Hex To Decimal */

/*
Complete the function which converts hex number (given as a string) to a decimal number.
*/

/*
P - String.
R - Decimal number.
E - 
hexToDec("1")       // 1
hexToDec("a")       // 10
hexToDec("-C")      // -12
P - 
function hexToDec(hexString) {
    // Convert using parseInt(x, y).
    // x will be the string to be converted.
    // y will be 16 because there are 16 hexadecimal digits.
}
*/

function hexToDec(hexString) {
    return parseInt(hexString, 16)
}

// Test: 
// console.log(hexToDec("1"))
// console.log(hexToDec("a"))
// console.log(hexToDec("10"))
// console.log(hexToDec("FF"))
// console.log(hexToDec("-C"))
