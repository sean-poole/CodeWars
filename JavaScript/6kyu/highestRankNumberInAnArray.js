/* Highest Rank Number In An Array */

/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function highestRank(arr) {
    let count = {};
    for (n of arr) {
        n in count ? count[n] += 1 : count[n] = 1;
    }

    let highest = 0;
    let result = "";
    for (key in count) {
        if (count[key] >= highest) {
            highest = count[key];
            result = key;
        }
    }

    return Number(result);
}

// Alternate solution: 
// function highestRank(arr) {
//     return arr.sort((a, b) => arr.filter(e => e === b).length - arr.filter(e => e === a).length)[0];
// }

// Test: 
// console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))
// console.log(highestRank([12,10,8,8,3,3,3,3,2,4,10,12,10]))
