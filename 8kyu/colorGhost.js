/* Color Ghost */

/*
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated
> ghost = new Ghost();
> ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

/*
P - No arguments.
R - String representing a random color among [ "white", "yellow", "purple", "red" ]
E - console.log(new Ghost().color)   // "red"
P - 
const Ghost = function() {
  // Store an array of colors as strings.
  // Select one element at random and assign it to `this.color`.
}
*/

const Ghost = function() {
  this.color = ["white", "yellow", "red", "purple"][Math.floor(Math.random() * 4)];
}

// Test: 
console.log(new Ghost().color)
