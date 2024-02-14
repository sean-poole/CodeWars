/* Is It A Palindrome? */

/*
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split("").reverse().join("");

// Test: 
// console.log(isPalindrome("a"))
// console.log(isPalindrome("aba"))
// console.log(isPalindrome("Abba"))
// console.log(isPalindrome("AbBa"))
// console.log(isPalindrome("hello"))
