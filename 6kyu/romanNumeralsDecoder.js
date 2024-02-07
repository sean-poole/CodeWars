/* Roman Numerals Decoder */

/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:
"MM"      -> 2000
"MDCLXVI" -> 1666
"M"       -> 1000
"CD"      ->  400
"XC"      ->   90
"XL"      ->   40
"I"       ->    1

Help:
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/

/*
P - One argument as a string.
R - Integer representing the value of the given Roman numeral string.
E - 
solution("XXI")       // 21
solution("I")         // 1
solution("IV")        // 4
solution("MMVIII")    // 2008
solution("MDCLXVI")   // 1666
P - 
function solution(roman) {
  // Create an object to store Roman numerals for integers in descending order.
  // Create an integer variable to store the sum. Initialize at 0.
  // Iterate through the given string.
  // If the concatenation of the current element and the following element are present in the Roman numerals object, add that value to the created variable. Increment the iteration variable.
  // Else, add the value of the current element to the created variable.
  // Return total sum as an integer.
}
*/

function solution(roman) {
  const rom = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 };
  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    if ((roman[i] + roman[i + 1]) in rom) {
      result += rom[roman[i] + roman[i + 1]];
      i++;
    } else {
      result += rom[roman[i]];
    }
  }

  return result;
}

// Test: 
// console.log(solution("XXI"))
// console.log(solution("I"))
// console.log(solution("IV"))
// console.log(solution("MMVIII"))
// console.log(solution("MDCLXVI"))
