/* A Needle In The Haystack */

/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
*/

function findNeedle(haystack) {
    let index = haystack.findIndex(e => e == "needle");
    return `found the needle at position ${index}`;
}

// Alternate solution: 
// function findNeedle(haystack) {
//     return "found the needle at position " + haystack.indexOf("needle");
// }

// Test: 
// arr = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]
// console.log(findNeedle(arr))