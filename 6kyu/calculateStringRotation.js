/* Calculate String Rotation */

/*
Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

If the second string isn't a valid rotation of the first string, the method returns -1.

Examples:
"coffee", "eecoff" => 2
"eecoff", "coffee" => 4
"moose", "Moose" => -1
"isn't", "'tisn" => 2
"Esham", "Esham" => 0
"dog", "god" => -1
*/

/* 
P - Two arguments as strings.
R - Integer representing the number of times the first string needs to be shifted right by one letter to match the second string.
E - 
shiftedDiff("eecoff", "coffee")     // 4
shiftedDiff("Moose", "moose")       // -1
shiftedDiff("Esham", "Esham")       // 0
P - 
function shiftedDiff(first, second) {
    // Create variable to store count as an integer.
    // Create a while first !== second loop.
    // Move the last element of the first string to the front.
    // Increment count.
    // Repeat until first === second and return count.
    // If count exceeds the length of given strings, there is no match and return -1.
}
*/

function shiftedDiff(first, second) {
    let count = 0;
    while (first !== second) {
        if (count > first.length) return -1;

        first = first[first.length - 1] + first.slice(0, first.length - 1);
        count++;
    }

    return count;
}

// Alternate solution: 
// const shiftedDiff = (first, second) => first.length == second.length ? (second + second).indexOf(first) : -1;

// Test: 
// console.log(shiftedDiff("eecoff", "coffee"))
// console.log(shiftedDiff("Moose", "moose"))
// console.log(shiftedDiff("isn't", "'tisn"))
// console.log(shiftedDiff("Esham", "Esham"))
// console.log(shiftedDiff(" ", " "))
// console.log(shiftedDiff("hoop", "pooh"))
// console.log(shiftedDiff("  ", " "))
