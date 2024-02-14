/* Weird String Case */

/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
> toWeirdCase( "String" );//=> returns "StRiNg"
> toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

/* 
P - One argument as a string. Will only consist of alphabetical letters and spaces to separate the words.
R - String with uppercase even indexed letters and lowercase odd indexed letters of each word 
E - toWeirdCase("This is a test")       // "ThIs Is A TeSt"
P - 
function toWeirdCase(string) {
    // Split the given string into an array.
    // Iterate through the array.
    // Iterate through each word.
    // Uppercase even indexed letters, lowercase odd indexed letters.
    // Join the array and return the formatted string.
}
*/

const toWeirdCase = string => string.split(" ").map(word => word.split("").map((letter, i) => i % 2 ? letter.toLowerCase() : letter.toUpperCase()).join("")).join(" ");

// Test: 
// console.log(toWeirdCase("This"))
// console.log(toWeirdCase("is"))
// console.log(toWeirdCase("This is a test"))
