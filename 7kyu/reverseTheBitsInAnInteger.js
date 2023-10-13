/* Reverse The Bits In An Integer */

/*
Write a function that reverses the bits in an integer.

For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

You can assume that the number is not negative.
*/

/*
P - One argument as an integer.
R - Integer representing the numerical value of reversing the bits of the given integer.
E - reverseBits(417)  // 267
P - 
function reverseBits(n) {
  // Convert the given integer to binary.
  // Reverse the bits.
  // Convert reversed binary to bits.
  // Return integer.
}
*/

function reverseBits(n) {
  return parseInt(n.toString(2).split("").reverse().join(""), 2);
}

// Test: 
// console.log(reverseBits(417))
// console.log(reverseBits(267))
// console.log(reverseBits(0))
// console.log(reverseBits(2017))
// console.log(reverseBits(1023))
// console.log(reverseBits(1024))
