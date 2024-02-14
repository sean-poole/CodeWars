/* Convert String to Camel Case */

/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

/*
P - One argument as a string. Words will be separated by "-" or "_".
R - Camel-cased string. Capitalize the first letter of every word following the first index.
E - 
console.log(toCamelCase("the_stealth_warrior"))     // "theStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior"))     // "theStealthWarrior"
P - 
function toCamelCase(str) {
    // Split the string at "-" or "_" where each element represents a word.
    // Iterate through the array.
    // If index > 0, capitalize the first letter of the element.
    // Join the array and return the string.
}
*/

const toCamelCase = str => str.split(/[_-]/).map((word, i) => (i > 0 ? word.charAt(0).toUpperCase() : word.charAt(0)) + word.slice(1)).join("");

// Test: 
// console.log(toCamelCase(""))
// console.log(toCamelCase("the_stealth_warrior"))
// console.log(toCamelCase("The-Stealth-Warrior"))
// console.log(toCamelCase("A-B-C"))
