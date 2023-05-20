/* Return A String's Even Characters */

/*
Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:
> "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
> "a"             --> "invalid string"
*/

/* 
P - One argument as a string. String length should be between 2 - 100.
R - Array of strings representing every even indexed character of the given string. Return "invalid string" for arguments less than 2 or greater than 100 in length.
E - 
evenChars("abcdefghjijklm")     // ["b", "d", "f", "h", "j", "l"]
evenChars("")                   // "invalid string"
P - 
function evenChars(string) {
  // Check if the given string is valid. Return "invalid string" if it is less than 2 or greater than 100 characters in length.
  // Split the given string into an array of characters.
  // Filter the array for even indexed elements.
  // Return array of characters.
}
*/

const evenChars = string => string.length >= 2 && string.length <= 100 ? string.split("").filter((letter, index) => index % 2 != 0) : "invalid string";

// Test: 
// console.log(evenChars("1234"))
// console.log(evenChars("abcdefghjijklm"))
// console.log(evenChars(""))
// console.log(evenChars("aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwnc"))
