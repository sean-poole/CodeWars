/* Initialize My Name */

/*
Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples: 
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

/*
P - One argument as a string.
R - String representing the given string with full first & last names, and initialized middle names.
E - 
initializeNames("Jack Ryan")                      // "Jack Ryan"
initializeNames("Lois Mary Lane")                 // "Lois M. Lane"
initializeNames("Dimitri")                        // "Dimitri"
initializeNames("Alice Betty Catherine Davis")    // "Alice B. C. Davis"
P - 
function initializeName(name) {
  // Split the given string at the spaces " ".
  // Iterate through the array.
  // If the current element is not the first or last element, ...
  // ... abbreviate it with the first initial followed by a period "."
  // Join the array into a string.
  // Return string.
}
*/

function initializeNames(name) {
  return name.split(" ")
             .map((e, i, a) => i == 0 || i == a.length - 1 ? e : `${e[0]}.`)
             .join(" ");
}

// Test: 
// console.log(initializeNames("Jack Ryan"))
// console.log(initializeNames("Lois Mary Lane"))
// console.log(initializeNames("Dimitri"))
// console.log(initializeNames("Alice Betty Catherine Davis"))
