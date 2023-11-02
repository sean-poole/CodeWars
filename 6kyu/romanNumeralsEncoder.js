/* Roman Numerals Encoder */

/*
Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:
solution(1000); // should return 'M'

Help:
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.
*/

/*
P - One argument as an integer.
R - String representing the Roman numeral expression of the given integer.
E - 
solution(1)     // "I"
solution(4)     // "IV"
solution(9)     // "IX"
solution(15)    // "XV"
solution(1990)  // "MCMXC"
P - 
function solution(number) {
  // Create an object to store Roman numerals for integers in descending order.
  // Create an empty string to store Roman numerals.
  // Iterate through the object of Roman numerals.
  // While the given number is greater than the current Roman numeral value...
  // ...add the Roman numeral to the created string. Subtract the roman numeral value from the given number.
  // Return string.
}
*/

function solution(number) {
  const rom = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 };
  let result = "";

  for (let i in rom) {
    while (number >= rom[i]) {
      result += i;
      number -= rom[i];
    }
  }

  return result;
}

// Test: 
// console.log(solution(1))
// console.log(solution(2))
// console.log(solution(3))
// console.log(solution(4))
// console.log(solution(5))
// console.log(solution(9))
// console.log(solution(10))
// console.log(solution(11))
// console.log(solution(19))
// console.log(solution(22))
// console.log(solution(15))
// console.log(solution(1000))
// console.log(solution(1001))
// console.log(solution(1990))
// console.log(solution(2007))
// console.log(solution(2008))
