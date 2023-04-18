/* Reversing Words In A String */

/*
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output): 
"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
*/

/* 
P - One argument as a string. String can contain multiple words or be empty.
R - Given string with the order of words reversed.
E - 
reverse("Hello World")          // "World Hello"
reverse("Hi There.")            // "There. Hi"
P - 
function reverse(string) {
    // Split the given string at spaces so each element represents a word.
    // Reverse the order of the array.
    // Join the array to include spaces.
    // Return the string.
}
*/

const reverse = string => string.split(" ").reverse().join(" ");

// Test: 
// console.log(reverse("I am an expert at this"))
// console.log(reverse("This is so easy"))
// console.log(reverse("no one cares"))
// console.log(reverse(""))
// console.log(reverse("CodeWars"))
