/* Convert A String To An Array */

/*
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

const stringToArray = string => string.split(" ");

// Test: 
test1 = "Robin Singh"
test2 = "I love arrays they are my favorite"

console.log(stringToArray(test1))
console.log(stringToArray(test2))