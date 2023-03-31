/* Pair of Gloves */

/*
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

/*
P - Array of strings.
R - Number representing the amount of duplicate strings.
E - 
numberOfPairs(['red','red'])                                            // 1
numberOfPairs(['red','green','blue'])                                   // 0
numberOfPairs(['gray','black','purple','purple','gray','black'])        // 3
P - 
function numberOfPairs(gloves) {
    // Create empty array and count variable.
    // Push unique values of given array to the empty array.
    // Iterate through the created array of unique colors.
    // For each element, filter the given array for that element.
    // Divide the length of the filtered array by 2, round down, add number to count variable.
}
*/

function numberOfPairs(gloves) {
    let colors = [];
    let pairs = 0;
    for (glove of gloves) {
        if (!colors.includes(glove)) colors.push(glove);
    }

    for (color of colors) {
        pairs += Math.floor(gloves.filter(e => e === color).length / 2);
    }

    return pairs;
}

// Test: 
// console.log(numberOfPairs(['red','red']))
// console.log(numberOfPairs(['red','green','blue']))
// console.log(numberOfPairs(['gray','black','purple','purple','gray','black']))
