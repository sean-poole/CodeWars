/* Reverse Words */

/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

const reverseWords = str => str.split(" ").map(word => word.split("").reverse().join("")).join(" ");

// Test: 
// console.log(reverseWords("The quick brown fox jumped over the lazy dog."))
// console.log(reverseWords("apple"))
// console.log(reverseWords("a b c d"))
// console.log(reverseWords("double  spaced  words"))
