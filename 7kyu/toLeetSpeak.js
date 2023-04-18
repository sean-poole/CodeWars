/* To Leet Speak */

/*
Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.
More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet
Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

For example:
> toLeetSpeak("LEET") returns "1337"

In this kata we use a simple LeetSpeak dialect. Use this alphabet:
{
  A : '@', B : '8', C : '(', D : 'D', E : '3', F : 'F', G : '6', H : '#', 
  I : '!', J : 'J', K : 'K', L : '1', M : 'M', N : 'N', O : '0', P : 'P', 
  Q : 'Q', R : 'R', S : '$', T : '7', U : 'U', V : 'V', W : 'W', X : 'X', 
  Y : 'Y', Z : '2'
}

*/

/*
P - One argument as a string.
R - Given string with letter replaced with their "leet speak" equivalent.
E - toLeetSpeak("LEET")     // "L337"
P - 
function toLeetSpeak(str) {
    // Split the given string into an array so each element represents a character.
    // Iterate through the array and replace letters with their leetspeak value using the provided object.
    // Join the array.
    // Return the formatted string.
}
*/

let leetspeak = { A : '@', B : '8', C : '(', D : 'D', E : '3', F : 'F', G : '6', H : '#', 
                I : '!', J : 'J', K : 'K', L : '1', M : 'M', N : 'N', O : '0', P : 'P', 
                Q : 'Q', R : 'R', S : '$', T : '7', U : 'U', V : 'V', W : 'W', X : 'X', 
                Y : 'Y', Z : '2' }

const toLeetSpeak = str => str.split("").map(c => c in leetspeak ? leetspeak[c] : c).join("");

// Test: 
// console.log(toLeetSpeak("LEET"))
// console.log(toLeetSpeak("CODEWARS"))
// console.log(toLeetSpeak("HELLO WORLD"))
// console.log(toLeetSpeak("LOREM IPSUM DOLOR SIT AMET"))
// console.log(toLeetSpeak("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"))
