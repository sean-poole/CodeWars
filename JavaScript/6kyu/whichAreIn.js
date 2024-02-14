/* Which Are In? */

/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Notes:
> Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
> In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
> Beware: In some languages r must be without duplicates.
*/

/*
P - Two arrays of strings, a1 and a2.
R - Sorted array in lexicographical order of strings a1 which are substrings of strings a2.
E - 
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]

a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []
P - 
function inArray(a1, a2) {
    // Filter given array a1 to check for substrings that are included in a2 elements.
}

*/

const inArray = (a1, a2) => a1.filter(e => a2.some(word => word.includes(e))).sort();

// Test: 
// test1 = ["xyz", "live", "strong"];
// test2 = ["lively", "alive", "harp", "sharp", "armstrong"];
// console.log(inArray(test1, test2))

// test3 = ["live", "strong", "arp"];
// test4 = ["lively", "alive", "harp", "sharp", "armstrong"];
// console.log(inArray(test3, test4))


// test5 = ["tarp", "mice", "bull"];
// test6 = ["lively", "alive", "harp", "sharp", "armstrong"];
// console.log(inArray(test5, test6))
