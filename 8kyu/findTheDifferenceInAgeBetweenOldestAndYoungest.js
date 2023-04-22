/* Find The Difference In Age Between Oldest and Youngest Family Members */

/*
At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
*/

/*
P - One argument as an array of integers.
R - Array with values: [youngest age, oldest age, difference]
E - differenceInAges([82, 15, 6, 38, 35])       // [6, 82, 76]
P - 
function differenceInAges(ages) {
    // Get the min number of ages.
    // Get the max number of ages.
    // Get the difference of max - min ages.
    // Return values in an array.
}
*/

const differenceInAges = ages => [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];

// Test: 
// console.log(differenceInAges([82, 15, 6, 38, 35]))
// console.log(differenceInAges([57, 99, 14, 32]))
