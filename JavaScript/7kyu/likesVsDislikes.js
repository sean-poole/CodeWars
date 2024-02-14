/* Like Vs Dislike */

/*
Story:
YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

Task:
Create a function that takes in a list of button inputs and returns the final state.

Examples:
likeOrDislike([Dislike]) => Dislike
likeOrDislike([Like,Like]) => Nothing
likeOrDislike([Dislike,Like]) => Like
likeOrDislike([Like,Dislike,Dislike]) => Nothing

Notes: 
If no button is currently active, return Nothing.
If the list is empty, return Nothing.
*/

/*
P - One argument as an array of string elements.
R - String representing the final state value of the given array.
E - 
likeOrDislike(["Dislike"])    // "Dislike"
likeOrDislike(["Like", "Like"])   // "Nothing"
likeOrDislike(["Dislike", "Like"])    // "Like"
likeOrDislike(["Like", "Dislike", "Dislike"])   // "Nothing"
likeOrDislike(["Dislike", "Dislike"])   // "Nothing"
likeOrDislike(["Like", "Like", "Like"])   // "Like"
likeOrDislike(["Like", "Dislike"])    // "Dislike"
likeOrDislike(["Dislike", "Like", "Dislike"])   // "Dislike"
likeOrDislike(["Like", "Like", "Dislike", "Like", "Like", "Like", "Like", "Dislike"])   // "Dislike"
likeOrDislike([])   // "Nothing"
P - 
function likeOrDislike(buttons) {
  // Create a variable to initialize default state as "Nothing".
  // Iterate through the given array.
  // If the current element is equal to the current state value, set it as "Nothing".
  // Else, set the current state value as the current element.
  // Return created state variable as a string.
}
*/

function likeOrDislike(buttons) {
  let state = "Nothing";

  for (let i = 0; i < buttons.length; i++) {
    state = buttons[i] === state ? "Nothing" : buttons[i];
  }

  return state;
}

// Test: 
// console.log(likeOrDislike(["Dislike"]))
// console.log(likeOrDislike(["Like", "Like"]))
// console.log(likeOrDislike(["Dislike", "Like"]))
// console.log(likeOrDislike(["Like", "Dislike", "Dislike"]))
// console.log(likeOrDislike(["Dislike", "Dislike"]))
// console.log(likeOrDislike(["Like", "Like", "Like"]))
// console.log(likeOrDislike(["Like", "Dislike"]))
// console.log(likeOrDislike(["Dislike", "Like", "Dislike"]))
// console.log(likeOrDislike(["Like", "Like", "Dislike", "Like", "Like", "Like", "Like", "Dislike"]))
// console.log(likeOrDislike([]))
