/* Is The String Uppercase? */

/*
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True

In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/

String.prototype.isUpperCase = function() {
    return this.toString() === this.toUpperCase();
}

// Test: 
// test1 = "c"
// test2 = "C"
// test3 = "hello I AM DONALD"
// test4 = "HELLO I AM DONALD"
// test5 = "ACSKLDFJSgSKLDFJSKLDFJ"
// test6 = "ACSKLDFJSGSKLDFJSKLDFJ"

// console.log(test1.isUpperCase())
// console.log(test2.isUpperCase())
// console.log(test3.isUpperCase())
// console.log(test4.isUpperCase())
// console.log(test5.isUpperCase())
// console.log(test6.isUpperCase())
