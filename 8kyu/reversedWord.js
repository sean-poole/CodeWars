/* Reversed Word */

/*
Complete the solution so that it reverses all of the words within the string passed in.
Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

/*
P - Word(s) as a string.
R - The order of words in the string is reversed.
E - 
reverseWords("hello world!")        // "world! hello"
reverseWords("foobar")              // "foobar"
P - 
function reverseWords(str) {
    // Split the given string to separate each word.
    // Reverse the array of words.
    // Return after joining to include spaces.
}
*/

const reverseWords = str => str.split(" ").reverse().join(" ");

// Test: 
// console.log(reverseWords("hello world!"))
// console.log(reverseWords("yoda doesn't speak like this"))
// console.log(reverseWords("foobar"))
// console.log(reverseWords("kata editor"))
// console.log(reverseWords("row row row your boat"))
// console.log(reverseWords(""))
