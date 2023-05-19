/* String Transformer */

/*
Given a string, return a new string that has transformed based on the input:
> Change case of every character, ie. lower case to upper case, upper case to lower case.
> Reverse the order of words from the input.

Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:
> "Example Input" ==> "iNPUT eXAMPLE"

You may assume the input only contain English alphabet and spaces.
*/

/*
P - One argument as a string.
R - String representing the given string with order of words reversed, lowercase characters > uppercase, uppercase characters > lowercase.
E - stringTransformer("Example string")     // "STRING eXAMPLE"
P - 
function stringTransformer(str) {
  // Split the given string into an array of words.
  // Reverse the order of the array.
  // Iterate through each word of the array.
  // Split each word into an array where each element represents a character.
  // Change lowercase letters to uppercase, and uppercase letters to lowercase.
  // Join the array of letters.
  // Join the array of words.
  // Return string.
}
*/

function stringTransformer(str) {
  return str.split(" ")
            .reverse()
            .map(word => word.split("")
              .map(letter => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase())
              .join(""))
            .join(" ");

}

// Test: 
// console.log(stringTransformer("Example string"))
