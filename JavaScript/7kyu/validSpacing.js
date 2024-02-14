/* Valid Spacing */

/*
Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).

For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:

* 'Hello world'   => true
* ' Hello world'  => false
* 'Hello world  ' => false
* 'Hello  world'  => false
* 'Hello'         => true

Even though there are no spaces, it is still valid because none are needed:
* 'Helloworld'    => true
* 'Helloworld '   => false
* ' '             => false
* ''              => true
Note - there will be no punctuation or digits in the input string, only letters.
*/

/*
P - One argument as a string.
R - Boolean representing if the given string contains no additional, leading, or trailing spacing.
E - 
validSpacing("Hello world")   // true
validSpacing(" Hello world")  // false
validSpacing("Hello world ")  // false
P - 
function validSpacing(s) {
  // Split the given string into an array of words separated by spaces.
  // Check if the given string is an empty string or if each element in the array is not an empty string.
  // Return boolean.
}
*/

const validSpacing = s => s === "" || s.split(" ").every(e => e !== "");

// Test: 
// console.log(validSpacing("Hello world"))
// console.log(validSpacing(" Hello world"))
// console.log(validSpacing("Hello world "))
// console.log(validSpacing("Hello"))
// console.log(validSpacing("Helloworld"))
