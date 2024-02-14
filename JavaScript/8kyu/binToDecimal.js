/* Bin To Decimal */

/*
Complete the function which converts a binary number (given as a string) to a decimal number.
*/

/*
P - Binary number as a string.
R - Decimal number.
E - 
binToDec("1")           // 1
binToDec("0")           // 0
binToDec("1001001")     // 73
P - 
function binToDec(bin) {
    // Return parseInt(x, y)
    // Where x is the binary number,
    // and y is the radix.
}
*/

const binToDec = bin => parseInt(bin, 2);

// Test: 
// console.log(binToDec("1"))
// console.log(binToDec("0"))
// console.log(binToDec("1001001"))
