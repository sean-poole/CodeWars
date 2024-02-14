/* Rot13 */

/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

/*
P - One argument as a string.
R - Given string with each character replaced with the letter 13 letters after it in the alphabet. Special characters are unchanged.
E - 
rot13("test")           // "grfg"
rot13("grfg")           // "test"
P - 
function rot13(message) {
    // Iterate through each character of the given string.
    // Get the charCode of each letter.
    // If the letter is "A - M", add 13 to the charCode and replace the letter.
    // If the letter is "N - Z", subtract 13 to the charCode and replace the letter.
    // Return the new string.
}
*/

function rot13(message) {
    let result = "";
    for (let char of message) {
      let charCode = char.charCodeAt();
      result += (char >= 'A' && char <= 'M' || char >= 'a' && char <= 'm') ? String.fromCharCode(charCode + 13) :
                (char >= 'N' && char <= 'Z' || char >= 'n' && char <= 'z') ? String.fromCharCode(charCode - 13) :
                char;
    }

    return result;
}

// Alternate solution: 
// const rot13 = message => message.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));

// Test: 
// console.log(rot13("test"))
// console.log(rot13("grfg"))
