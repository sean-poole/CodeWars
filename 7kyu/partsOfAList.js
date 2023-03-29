/* Parts Of A List */

/*
Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

> Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
> Each part will be in a string
> Elements of a pair must be in the same order as in the original array.

Examples of returns in different languages:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
*/

/*
P - Array of strings.
R - Array of arrays of strings. Subarrays will contain unique string pairings.
E - 
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
P - 
function partlist(arr) {
    // Create empty array to store result.
    // Iterate through the given array.
    // Create head variable to store elements from the beginning of the given array to the index.
    // Create tail variable to store elements from the index to the end of the given array.
    // Join head & tail arrays and push the pairing to result.
}
*/

function partlist(array) {
    let result = [];
    for (let i = 1; i < array.length; i++) {
        let head = array.slice(0, i);
        let tail = array.slice(i);
        result.push([head.join(" "), tail.join(" ")]);
    }

    return result;
}

// Test: 
// console.log(partlist(["I", "wish", "I", "hadn't", "come"]))
// console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"]))
// console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"]))
