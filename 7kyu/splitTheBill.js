/* Split The Bill */

/*
You're in a restaurant with your friends and it's time to go, but there's still one big problem...the bill. Who will pay what? Lucky for you, you've got your computer handy! One simple function and the bill is paid——fairly, too!
The function should take one parameter: an object/dict with two or more name-value pairs that represent the members of the group and the amount spent by each.
Your function should return an object/dict with the same names, showing how much money the members should pay or receive.

Further points:
The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
If value is a decimal, round to two decimal places.
Translations and comments (and upvotes!) welcome.

Example: 
3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.

var group = {
    A: 20, 
    B: 15, 
    C: 10
}

splitTheBill(group) // returns {A: 5, B: 0, C: -5}
*/

/* 
P - One argument as an object. Contains at least two key:value pairs representig the number of members of the group and the amount spent.
R - Object of key:value pairs representing how much each person owes (Negative number) or is owed (Positive number). Decimals are rounded to two decimal places.
E - 
splitTheBill({A: 20, B: 15, C: 10})         // {A: 5, B: 0, C: -5}
splitTheBill({A: 40, B: 25, X: 10})         // {A: 15, B: 0, X: -15}
P - 
function splitTheBill(group) {
    // Create a variable to store the average of values from the given object.
    // Subtract the average from each value.
    // Return object.
}
*/

// function splitTheBill(group) {
//     let average = 0;
//     for (person in group) {
//         average += group[person];
//     }

//     return average / Object.keys(group).length;
// }

function splitTheBill(group) {
    let average = Object.values(group).reduce((acc, c) => acc += c, 0) / Object.keys(group).length;
    for (person in group) {
        group[person] = +(group[person] - average).toFixed(2);
    }

    return group;
}

// Test: 
// console.log(splitTheBill({A: 20, B: 15, C: 10}))
// console.log(splitTheBill({A: 40, B: 25, X: 10}))
// console.log(splitTheBill({A: -17.2, B: -32.2, C: -47.2, D: 95.8, E: 0.8}))
