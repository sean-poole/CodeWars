/* Anagram Detection */

/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

const isAnagram = (test, original) => test.toLowerCase().split("").sort().join("") == original.toLowerCase().split("").sort().join("");

// Test: 
// console.log(isAnagram("foefet", "toffee"))
// console.log(isAnagram("Buckethead", "DeathCubeK"))
// console.log(isAnagram("Twoo", "WooT"))
// console.log(isAnagram("dumble", "bumble"))
// console.log(isAnagram("ound", "round"))
// console.log(isAnagram("apple", "pale"))
