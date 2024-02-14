/* Categorize New Member */

/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

function openOrSenior(data) {
    let list = [];
    data.forEach(person => {
        if (person[0] >= 55 && person[1] > 7) {
            list.push("Senior");
        } else {
            list.push("Open");
        }
    });
    return list;
}

// Alternate solution:
// const openOrSenior = data => data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? "Senior" : "Open");

// Test: 
// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
// console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]))
// console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]))
