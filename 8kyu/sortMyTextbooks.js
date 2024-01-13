/* Sort My Textbooks */

/*
HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

The sorting should NOT be case sensitive
*/

/*
P - One argument as an array of strings.
R - Array representing the given array with elements ordered alphabetically. Case insensitive.
E - 
sorter(["Algebra", "History", "Geometry", "English"])     // ["Algebra", "English", "Geometry", "History"]
sorter(["Algebra", "history", "Geometry", "english"])     // ["Algebra", "english", "Geometry", "History"]
sorter(["Ang#bra", "$istory", "Geom^try", "**english"])   // ["$istory", "**english", "Alg#bra", "Geom^try"]
P - 
function sorter(textbooks) {
  // Sort the given array by comparing lowercased string elements.
  // Return sorted array.
}
*/

function sorter(textbooks) {
  return textbooks.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
}

// Test: 
// console.log(sorter(["Algebra", "History", "Geometry", "English"]))
// console.log(sorter(["Algebra", "history", "Geometry", "english"]))
// console.log(sorter(["Ang#bra", "$istory", "Geom^try", "**english"]))
