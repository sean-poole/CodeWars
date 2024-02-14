/* Decode The Morse Code */

/*
In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:
> decodeMorse('.... . -.--   .--- ..- -.. .')
> // should return "HEY JUDE"

All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

Good luck!
*/

/*
P - One argument as a string containing valid Morse code.
R - String representing the decoded translation of the given Morse code string.
E - 
decodeMorse(".... . -.--   .--- ..- -.. .")     // "HEY JUDE"
decodeMorse("   .... . -.--   ")                // "HEY"
P - 
function decodeMorse(morseCode) {
  // Create a helper function to translate a single letter.
  // Create a helper function to decode each word by splitting it into an array and applying the previous helper function to each element. Join to string.
  // Remove whitespace from the given string, split into an array, apply `decodeWord` helper function to each element, join to string.
  // Return string.
}
*/

function decodeMorse(morseCode) {
  const decodeLetter = letter => MORSE_CODE[letter];
  const decodeWord = word => word.split(" ").map(decodeLetter).join("");

  return morseCode.trim().split("   ").map(decodeWord).join(" ");
}

// Test: 
// console.log(decodeMorse(".... . -.--   .--- ..- -.. ."))
// console.log(decodeMorse("   .... . -.--   "))
