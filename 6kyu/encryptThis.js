/* Encrypt This! */

/*
Description:
Encrypt this!
You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

> Your message is a string containing space separated words.
> You need to encrypt each word in the message using the following rules:
    The first letter must be converted to its ASCII code.
    The second letter must be switched with the last letter
> Keepin' it simple: There are no special characters in the input.

Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

function encryptThis(text) {
    let result = [];
    text = text.split(" ");
    for (let i = 0; i < text.length; i++) {
        let encrypt = "";
        text[i].length > 2 ? 
        encrypt = text[i][0].charCodeAt(0) + text[i][text[i].length - 1] + text[i].slice(2, text[i].length - 1) + text[i][1] : 
        encrypt = text[i][0].charCodeAt(0) + text[i].slice(1);
        result.push(encrypt);
    }

    return result.join(" ");
}

// Alternate solution: 
// function encryptThis(text) {
//     return text.split(" ")
//                 .map(word => word.length <= 2 ? 
//                     word[0].charCodeAt(0) + word.slice(1) : 
//                     word[0].charCodeAt(0) + word[word.length - 1] + word.slice(2, word.length - 1) + word[1])
//                 .join(" ");
// }

// Test: 
// console.log(encryptThis("A"))
// console.log(encryptThis("A wise old owl lived in an oak"))
// console.log(encryptThis("The more he saw the less he spoke"))
// console.log(encryptThis("The less he spoke the more he heard"))
// console.log(encryptThis("Why can we not all be like that wise old bird"))
// console.log(encryptThis("Thank you Piotr for all your help"))
