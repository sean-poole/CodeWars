/* Running Out Of Space */

/*
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
*/

/*
P - One argument as an array of strings.
R - Array with string elements representing the gradual combining of elements with spaces removed.
E - 
spacey(["kevin", "has", "no", "space"])
// ["kevin", "kevinhas", "kevinhasno", "kevinhasnospace"]
P - 
function spacey(array) {
  // Map the given array where each element...
  // ...is replaced with a copy of the original array from index 0...
  // ... to the current index + 1.
  // Join the subarray with no spaces.
  // Return array of strings.
}
*/

const spacey = array => array.map((e, i) => array.slice(0, i + 1).join(""));

// Test: 
// console.log(spacey(["kevin", "has", "no", "space"]))
// console.log(spacey(["this", "cheese", "has", "no", "holes"]))
