/* Grasshopper - Combine Strings */

/*
Combine strings function
Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')
returns:

'James Stevens'
*/

/*
P - Two arguments as strings.
R - String representing the concatenation of the given strings.
E - combineNames("James", "Stevens")    // "James Stevens"
P - 
function combineNames(firstName, lastName) {
  // return given strings as one string.
}
*/

const combineNames = (firstName, lastName) => `${firstName} ${lastName}`;

// Test: 
// console.log(combineNames("James", "Stevens"))
