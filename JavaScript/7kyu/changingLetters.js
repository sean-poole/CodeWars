/* Changing Letters */

/*
When provided with a String, capitalize all vowels

For example:
> Input : "Hello World!"
> Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.
*/

/*
P - One argument as a string.
R - Given string with vowels capitalized.
E - swap("HelloWorld!")     // "HEllOWOrld!"
P - 
function swap(string) {
    // Split the string into an array.
    // Iterate through the array and check if each element is a vowel.
    // If it is a vowel, capitalize it.
    // Else, leave it as is.
    // Join the array and return the string.
}
*/

const swap = string => string.split("").map(e => "aeiou".includes(e) ? e.toUpperCase() : e).join("");

// Test: 
// console.log(swap(""))
// console.log(swap("   @@@"))
// console.log(swap("HelloWorld!"))
// console.log(swap("Sunday"))
// console.log(swap("Codewars"))
// console.log(swap("Monday"))
// console.log(swap("Friday"))
// console.log(swap("abracadabra"))
// console.log(swap("AbrAcAdAbrA"))
// console.log(swap("ABRACADABRA"))
// console.log(swap("aBRaCaDaBRa"))
