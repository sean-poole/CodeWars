/* Unscrambled Eggs */

/*
Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

Example: 
unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"

Kata is supposed to be for beginners to practice regular expressions, so commenting would be appreciated.
*/

/*
P - One argument as a string.
R - String representing the given argument with "egg"(s) removed.
E - unscrambleEggs("Beggegeggineggneggeregg")   // "Beginner"
P - 
function unscrambleEggs(word) {
  // Split the given string at "egg".
  // Join the array of elements.
  // Return string.
}
*/

const unscrambleEggs = word => word.split("egg").join("");

// Test: 
// console.log(unscrambleEggs("ceggodegge heggeregge"))
// console.log(unscrambleEggs("FeggUNegg KeggATeggA"))
