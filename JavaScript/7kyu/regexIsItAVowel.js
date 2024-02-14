/* Regex Basics - Is It A Vowel */

/*
Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.
*/

String.prototype.vowel = function() {
    return /^[aeiou]$/i.test(this);
}

// Test: 
// console.log("".vowel())
// console.log("a".vowel())
// console.log("E".vowel())
// console.log("ou".vowel())
// console.log("z".vowel())
// console.log("lol".vowel())
