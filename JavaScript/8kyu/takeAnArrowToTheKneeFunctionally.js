/* Take An Arrow To The Knee, Functionally */

/*
Arrow style Functions: 
Come here to practice the Arrow style functions Not much else to say good luck!

Details: 
You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

Examples: 
Javascript => String.fromCharCode(97) // a
*/

/* 
P - One argument as an array of integers.
R - String representing a joined array of ascii characters derived from the given array.
E - ArrowFunc([84,101,115,116])         // "Test"
P - const ArrowFunc = arr => {
    // Iterate through the given array.
    // Convert each integer value to its corresponding ascii character.
    // Join the array and return a string.
}
*/

const ArrowFunc = arr => arr.map(e => String.fromCharCode(e)).join("");

// Test: 
// console.log(ArrowFunc([84,101,115,116]))
// console.log(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]))
