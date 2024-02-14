/* Split In Parts */

/*
The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

Example:
Split the below string into other strings of size #3
> 'supercalifragilisticexpialidocious'

Will return a new string
> 'sup erc ali fra gil ist ice xpi ali doc iou s'

Assumptions:
String length is always greater than 0
String has no spaces
Size is always positive
*/

/*
P - Two arguments: one string and one integer.
R - Given string split into substrings with a length of the given integer.
E - splitInParts("supercalifragilisticexpialidocious", 3)       // "sup erc ali fra gil ist ice xpi ali doc iou s"
P - 
function splitInParts(s, partLength) {
    // Create an empty array to store substrings.
    // Iterate through the given string and push substrings of given length to the array.
    // Join the array with spaces and return the string.
}
*/

function splitInParts(s, partLength) {
    let result = [];
    for (let i = 0; i < s.length; i += partLength) {
        result.push(s.slice(i, i + partLength));
    }

    return result.join(" ");
}

// Test: 
// console.log(splitInParts("supercalifragilisticexpialidocious", 3))
// console.log(splitInParts("HelloKata", 1))
// console.log(splitInParts("HelloKata", 9))
