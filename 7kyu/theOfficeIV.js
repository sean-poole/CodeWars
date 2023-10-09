/* The Office IV */

/*
Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy
'O' --> empty

If all rooms are busy, return "None available!"
*/

/*
P - One argument as an array of single character strings.
R - Integer representing the index of the first empty room within the given array.
E - 
meeting(["X", "O", "X"])              // 1
meeting(["O", "X", "X", "X", "X"])    // 0
meeting(["X", "X", "X", "X", "X"])    // "None available!"
P - 
function meeting(x) {
  // Find the index of the first instance of string "O"
  // If it exists in the given array, return its index.
  // Else, return string "None available!"
}
*/

const meeting = x => x.includes("O") ? x.indexOf("O") : "None available!";

// Test: 
// console.log(meeting(["X", "O", "X"]))
// console.log(meeting(["O", "X", "X", "X", "X"]))
// console.log(meeting(["X", "X", "X", "X", "X"]))
