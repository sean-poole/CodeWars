/* Naughty or Nice */

/*
In this kata, you will write a function that receives an array of string and returns a string that is either 'naughty' or 'nice'. Strings that start with the letters b, f, or k are naughty. Strings that start with the letters g, s, or n are nice. Other strings are neither naughty nor nice.

If there is an equal amount of bad and good actions, return 'naughty'

Examples:
bad_actions = ['broke someone\'s window', 'fought over a toaster', 'killed a bug']
whatListAmIOn(bad_actions)
#-> 'naughty'

good_actions = ['got someone a new car', 'saved a man from drowning', 'never got into a fight']
what_list_am_i_on(good_actions)
#-> 'nice'

actions = ['broke a vending machine', 'never got into a fight', 'tied someone\'s shoes']
what_list_am_i_on(actions)
#-> 'naughty'
*/

/*
P - One argument as an array of string elements.
R - String representing if the elements of the given array are considered "naughty" or "nice".
E - 
whatListAmIOn(['broke someone\'s window', 'fought over a toaster', 'killed a bug'])               // "naughty"
whatListAmIOn(['got someone a new car', 'saved a man from drowning', 'never got into a fight'])   // "nice"
whatListAmIOn(['broke a vending machine', 'never got into a fight', 'tied someone\'s shoes'])     // "naughty"
P - 
function whatListAmIOn(actions) {
  // Create a variable to store count as an integer.
  // Iterate through the given array.
  // Increment the created count variable if the current string element begins with g, s, n.
  // Decrement the created count variable if the current string element begins with b, f, k.
  // If count > 0, return "nice".
  // Else, return "naughty".
}
*/

function whatListAmIOn(actions) {
  let count = 0;

  for (let i = 0; i < actions.length; i++) {
    if (["g", "s", "n"].includes(actions[i].charAt(0))) count++;
    if (["b", "f", "k"].includes(actions[i].charAt(0))) count--;
  }

  return count > 0 ? "nice" : "naughty";
}

// Test: 
const bad_actions = ['broke someone\'s window', 'fought over a toaster', 'killed a bug'];
const good_actions = ['got someone a new car', 'saved a man from drowning', 'never got into a fight'];
const actions = ['broke a vending machine', 'never got into a fight', 'tied someone\'s shoes'];

// console.log(whatListAmIOn(bad_actions))
// console.log(whatListAmIOn(good_actions))
// console.log(whatListAmIOn(actions))
