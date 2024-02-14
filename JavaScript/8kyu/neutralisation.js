/* Neutralisation */

/*
Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.

Worked Example: 
("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.

Examples: 
("--++--", "++--++") ➞ "000000"
("-+-+-+", "-+-+-+") ➞ "-+-+-+"
("-++-", "-+-+") ➞ "-+00"

Notes: 
The two strings will be the same length.
*/

/*
P - Two arguments as strings. Strings will be equal in length and only contain "+" or "-" characters.
R - String representing the interaction of the given strings. "+" and "-" interaction is shown as 0.
E - 
neutralise("--++--", "++--++")    // "000000"
neutralise("-+-+-+", "-+-+-+")    // "-+-+-+"
neutralise("-++-", "-+-+")        // "-+00"
P - 
function neutralise(s1, s2) {
  // Create a string variable to store argument interactions.
  // Iterate through the given strings.
  // If the current elements are the same, add the element to the created string.
  // Else, add "0" to the created string.
  // Return string.
}
*/

function neutralise(s1, s2) {
  let result = "";

  for (let i = 0; i < s1.length; i++) {
    result += s1[i] === s2[i] ? s1[i] : "0";
  }

  return result;
}

// Test: 
// console.log(neutralise("--++--", "++--++"))
// console.log(neutralise("-+-+-+", "-+-+-+"))
// console.log(neutralise("-++-", "-+-+"))
// console.log(neutralise("--++", "++++"))
// console.log(neutralise("+++--+---", "++----++-"))
// console.log(neutralise("-----", "-----"))
// console.log(neutralise("-+", "++"))
// console.log(neutralise("--", "-+"))
// console.log(neutralise("-++", "+--"))
