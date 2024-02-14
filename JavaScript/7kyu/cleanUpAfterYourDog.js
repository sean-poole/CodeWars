/* Clean Up After Your Dog */

/*
You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D
Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.
You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.
You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.
If you do, return 'Clean', else return 'Cr@p'.
Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

For example:
x=
[[_,_,_,_,_,_]
[_,_,_,_,@,_]
[@,_,_,_,_,_]]

bags = 2, cap = 2
return --> 'Clean'
*/

/*
P - One argument as an array of arrays. Sub-array elements represented as "_", "@", or "D". Two arguments as integers. Integers must be >= 0.
R - String representing if the given integers provide enough capacity to clean the garden or if a dog is present.
E - 
crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2)  // "Clean"
crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1)  // "Cr@p"
crap([['_','_'], ['_','@'], ['D','_']], 2, 2)                           // "Dog!!"
P - 
function crap(x, bags, cap) {
  // Concatenate the subarrays of the given array.
  // If the string contains a character of "D", return "Dog!!".
  // Else, spread the string into an array.
  // Filter the array for elements === "@".
  // Count the length of the filtered array.
  // If the count is <= bags * cap, return "Clean".
  // Else, return "Cr@p".
}
*/

function crap(x, bags, cap) {
  let yard = x.reduce((acc, c) => acc += c);
  if (yard.includes("D")) {
    return "Dog!!";
  } else {
    return [...yard].filter(e => e === "@").length <= bags * cap ? "Clean" : "Cr@p";
  }
}

// function crap(x, bags, cap) {
//   if (x.some(subarray => subarray.includes("D"))) return "Dog!!";
//   let count = x.reduce((acc, c) => acc += c.filter(e => e === "@").length, 0);

//   return count <= bags * cap ? "Clean" : "Cr@p";
// }

// Test: 
// console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2))
// console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1))
// console.log(crap([['_','_'], ['_','@'], ['D','_']], 2, 2))
