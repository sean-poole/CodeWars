/* Find The Lucky Numbers */

/*
Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

For example,
ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
[7,70,17]

Don't worry about bad input, you will always receive a finite list of integers.
*/

/*
P - One argument as an array of integers.
R - Given array of integers containing only the elements with a 7.
E - 
filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17])    // [7, 70, 17]
filterLucky([71, 9907, 69])                               // [71, 9907]
P - 
function filterLucky(x) {
  // Iterate through the array.
  // Convert each element to a string and filter for elements that contain a 7.
  // Return filtered array of integers.
}
*/

function filterLucky(x) {
  return x.filter(n => n.toString().includes("7"));
}

// Test: 
// console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]))
// console.log(filterLucky([71, 9907, 69]))
