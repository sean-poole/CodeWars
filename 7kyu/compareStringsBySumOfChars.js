/* Compare Strings by Sum of Chars */

/*
Compare two strings by comparing the sum of their values (ASCII character code).
> For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
> If the string contains other characters than letters, treat the whole string as it would be empty
> Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal
*/

/*
P - Two arguments as strings.
R - Boolean representing if the sum of the given strings' ASCII character code are equal.
E - 
compare("AD", "BC")         // true
compare("AD", "DD")         // false
compare("gf", "FG")         // true
compare("zz1", "")          // true
compare("ZzZz", "ffPFF")    // true
compare("kl", "lz")         // false
compare("null", "")         // true
P - 
function compare(s1, s2) {
  // Check if either string is null or contains characters that are not letters.
  // If true, set string to "".
  // Split each string into an array.
  // Reduce each array by converting each letter to its ASCII character code and calculate the sum.
  // Compare if the values are equal.
  // Return boolean.
}
*/

function compare(s1, s2) {
  if (s1 === null || /[^a-zA-Z]/g.test(s1)) {
    s1 = "";
  }
  if (s2 === null || /[^a-zA-Z]/g.test(s2)) {
    s2 = "";
  }

  s1 = [...s1].reduce((acc, c) => acc += c.toUpperCase().charCodeAt(), 0);
  s2 = [...s2].reduce((acc, c) => acc += c.toUpperCase().charCodeAt(), 0);

  return s1 === s2;
}

// Test: 
// console.log(compare("AD", "BC"))
// console.log(compare("AD", "DD"))
// console.log(compare("gf", "FG"))
// console.log(compare("Ad", "DD"))
// console.log(compare("zz1", ""))
// console.log(compare("ZzZz", "ffPFF"))
// console.log(compare("kl", "lz"))
// console.log(compare("!!", "7476"))
// console.log(compare("##", "1176"))
// console.log(compare(null, "BC"))
// console.log(compare(null, null))
// console.log(compare(null, ""))
// console.log(compare("", ""))
