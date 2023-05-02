/* The Office I */

/*
Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).
*/

/*
P - Two arguments: one object containing names with a value of an integer and a string representing a name in the given object.
R - String results based on the sum of values within the object / number of keys in the object.
E - 
outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura')        // "Get Out Now!"
outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie')        // "Nice Work Champ!"
P - 
function outed(meet, boss) {
    // Create a variable to store an integer.
    // Iterate through the given object and check each name for the given string.
    // When a match is found, double its value and add it to the created variable.
    // Otherwise, add the value to the created variable.
    // Divide the sum by the number of people in the object.
    // Return "Get Out Now!" if the number is <= 5
    // Else return "Nice Work Champ!"
}
*/

function outed(meet, boss) {
    let points = 0;
    for (person in meet) {
        points += boss === person ? meet[person] * 2 : meet[person];
    }

    return points / Object.keys(meet).length <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}

// Alternate solution: 
// function outed(meet, boss) {
//     let names = Object.keys(meet);
//     let points = names.reduce((acc, c) => acc + meet[c], 0) + meet[boss];
//     return points / names.length <= 5 ? "Get Out Now!" : "Nice Work Champ!";
// }

// Test: 
// console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'))
// console.log(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'))
// console.log(outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'))
