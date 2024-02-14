/* Sort Arrays (Ignoring Case) */

/*
Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
*/

/*
P - One argument as an array of strings.
R - Given array of strings sorted in alphabetical order regardless of case.
E - sortme(["Hello","there","I'm","fine"])      // ["fine", "Hello", "I'm", "there"]
P - 
function sortme(names) {
    // Iterate through the given array and sort lowercased elements in alphabetical order.
    // Return sorted array.
}
*/

const sortme = names => names.sort((a, b) => a.localeCompare(b, "en", { "sensitivity": "base"}));

// Test: 
// console.log(sortme(["Hello","there","I'm","fine"]))
// console.log(sortme(["C", "d", "a", "B"]))
// console.log(sortme(["CodeWars"]))
// console.log(sortme([]))
