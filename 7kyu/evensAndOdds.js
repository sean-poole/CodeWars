/* Evens and Odds */

/*
This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.
*/

/*
P - One argument as an integer.
R - String as the binary representation for a given even number or the hexadecimal representation for a given odd number.
E - 
evensAndOdds(2)             // "10"
evensAndOdds(13)            // "d"
evensAndOdds(47)            // "2f"
evensAndOdds(0)             // "0"
evensAndOdds(12800)         // "11001000000000"
evensAndOdds(8172381723)    // "1e71ca61b"
P - 
function evensAndOdds(num) {
  // Check if the given integer is even or odd.
  // If even, convert the integer to binary.
  // If odd, convert the integer to hexadecimal.
  // Return string.
}
*/

const evensAndOdds = num => num % 2 === 0 ? num.toString(2) : num.toString(16);

// Test: 
// console.log(evensAndOdds(2))
// console.log(evensAndOdds(13))
// console.log(evensAndOdds(47))
// console.log(evensAndOdds(0))
// console.log(evensAndOdds(12800))
// console.log(evensAndOdds(8172381723))
