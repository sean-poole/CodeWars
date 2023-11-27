/* Regex Count Lowercase Letters */

/*
Your task is simply to count the total number of lowercase letters in a string.

Examples:
"abc" ===> 3
"abcABC123" ===> 3
"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
"" ===> 0;
"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
"abcdefghijklmnopqrstuvwxyz" ===> 26
*/

/*
P - One argument as a string.
R - Integer representing the number of lowercase letters in the given string.
E - 
lowercaseCount("abc")   // 3
lowercaseCount("abcABC123")   // 3
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")   // 3
lowercaseCount("")    // 0
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")    // 0
lowercaseCount("abcdefghijklmnopqrstuvwxyz")    // 26
P - 
function lowercaseCount(str) {
  // Create an array that matches the lowercase letters in the given string.
  // Determine the length of the array.
  // Return integer.
}
*/

const lowercaseCount = str => (str.match(/[a-z]/g) || []).length;

// Test: 
// console.log(lowercaseCount("abc"))
// console.log(lowercaseCount("abcABC123"))
// console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))
// console.log(lowercaseCount(""))
// console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))
// console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"))
