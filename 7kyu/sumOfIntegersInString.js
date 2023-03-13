/* Sum Of Integers In String */

/*
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.
*/

/*
P - String.
R - Positive Integer.
E - 
sumOfIntegersInString(12.4)         // 16
sumOfIntegersInString(h3ll0w0rld)   // 3
P - 
function sumOfIntegersInString(s) {
    // Find matches for digits 0-9, otherwise return an empty array.
    // Reduce the array of digits to get the sum.
}
*/

const sumOfIntegersInString = s => (s.match(/\d+/g) || []).reduce((acc, c) => acc += Number(c), 0);

// Test: 
let exampleTests = [
    "12.4",
    "h3ll0w0rld",
    "2 + 3 = ",
    "Our company made approximately 1 million in gross revenue last quarter.",
    "The Great Depression lasted from 1929 to 1939.",
    "Dogs are our best friends.",
    "C4t5 are 4m4z1ng.",
    "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
]

// exampleTests.forEach(e => console.log(sumOfIntegersInString(e)))
