/* Vowel Remover */

/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples: 
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

> don't worry about uppercase vowels
> y is not considered a vowel for this kata
*/

const shortcut = string => string.split("").filter(c => !"aeiou".includes(c)).join("");

// Test: 
// console.log(shortcut("hello"))
// console.log(shortcut("how are you today?"))
// console.log(shortcut("complain"))
// console.log(shortcut("never"))
