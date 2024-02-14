/* Row Weights */

/*
Scenario: 
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task: 
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes: 
Array size is at least 1.
All numbers will be positive.

Input >> Output Examples: 
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
*/

function rowWeights(array) {
    let team1 = [];
    let team2 = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            team1.push(array[i]);
        }
        else {
            team2.push(array[i]);
        }
    }
    return [team1.reduce((acc, c) => acc += c, 0), team2.reduce((acc, c) => acc += c, 0)];
}

// Alternate solution: 
// function rowWeights(array) {
//     let team1 = array.filter((x, i) => i % 2 == 0).reduce((acc, c) => acc += c, 0);
//     let team2 = array.filter((x, i) => i % 2 !== 0).reduce((acc, c) => acc += c, 0);
//     return [team1, team2];
// }

// Test: 
// console.log(rowWeights([80]))
// console.log(rowWeights([100, 50]))
// console.log(rowWeights([50, 60, 70, 80]))
// console.log(rowWeights([13, 27, 49]))
// console.log(rowWeights([70, 58, 75, 34, 91]))
// console.log(rowWeights([29, 83, 67, 53, 19, 28, 96]))
// console.log(rowWeights([0]))
// console.log(rowWeights([100, 51, 50, 100]))
// console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]))
// console.log(rowWeights([0, 1, 0]))
