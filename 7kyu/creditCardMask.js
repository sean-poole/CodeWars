/* Credit Card Mask */

/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!"
-->
"####################################man!"
*/

/*
P - String. Contains numbers or letters.
R - Given string with "#" replacing all characters except the last 4.
E - 
maskify("1")            // "1"
maskify("12345")        // "#2345"
maskify("1234567890")   // "######7890"
P - 
function maskify(cc) {
    // Split the string into an array of individual characters.
    // Map the array to change all characters that have an index < array.length - 4 to "#".
    // Return the joined array as a string.
}
*/

const maskify = cc => cc.split("").map((e, i) => i < cc.length - 4 ? "#" : e).join("");

// Alternate solution: 
// const maskify = cc => cc.slice(-4).padStart(cc.length, "#");

// Test: 
// console.log(maskify("4556364607935616"))
// console.log(maskify("1"))
// console.log(maskify("11111"))
