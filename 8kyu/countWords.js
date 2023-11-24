/* Count Words */

/*
Can you implement a function that will return number of words in a string?

You have to ensure that spaces in string is a whitespace for real.

Let's take a look on some examples:

countWords("Hello"); // returns 1 as int
countWords("Hello, World!") // returns 2
countWords("No results for search term `s`") // returns 6
countWords(" Hello") // returns 1
// ... and so on
What kind of tests we made for your code:

Function have to count words and not spaces. You have to be sure that you doing it right
Empty string has no words.
String with spaces around should be trimmed.
Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
Doublecheck that words with chars like -, ', ` are counted right.
*/

/*  
P - One argument as a string.
R - Integer representing the number of words in the given string.
E - 
countWords("Hello")   // 1
countWords("Hello, World!")   // 2
countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")    // 19
countWords("")    // 0
countWords("With! Symbol@ #Around! (Every) %Word$")   // 5
countWords("Dear   Victoria, I love  to press   space button.")   // 8
P - 
function countWords(str) {
  // Split the given string into an array.
  // Filter the array for non-empty elements.
  // Count the number of remaining array elements.
  // Return integer.
}
*/

const countWords = str => str.split(/\s+/).filter(x => x).length;

// Alternate solution: 
// const countWords = str => str.split(" ").filter(e => e !== "").length;

// Test: 
// console.log(countWords("Hello"))
// console.log(countWords("Hello, World!"))
// console.log(countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))
// console.log(countWords(""))
// console.log(countWords("With! Symbol@ #Around! (Every) %Word$"))
// console.log(countWords("Dear   Victoria, I love  to press   space button."))
