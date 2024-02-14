/* Responsible Drinking */

/*
Welcome to the Codewars Bar!
Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

Examples: 
"1 beer"  -->  "1 glass of water"
because you drank one standard drink

"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
because you drank ten standard drinks

Note:
To keep the things simple, we'll consider that any "numbered thing" in the string is a drink. Even "1 bear" -> "1 glass of water"; or "1 chainsaw and 2 pools" -> "3 glasses of water"...
*/

/*
P - One argument as a string.
R - String representing how many glasses of water the user should drink.
E - 
hydrate("1 beer")                         // "1 glass of water"
hydrate("2 glasses of wine and 1 shot")   // "3 glasses of water"
P - 
function hydrate(s) {
  // Split the given string into an array.
  // Filter the array for elements that are integers.
  // Reduce the array of integers to get the sum.
  // Return string.
}
*/

function hydrate(s) {
  const drinks = s.split(" ").filter(e => !isNaN(e)).reduce((acc, c) => acc += +c, 0);
  return drinks === 1 ? `${drinks} glass of water` : `${drinks} glasses of water`;
}

// Test: 
// console.log(hydrate("1 beer"))
// console.log(hydrate("2 glasses of wine and 1 shot"))
// console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"))
