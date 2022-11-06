/* Total Amount Of Points */

/*
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

function points(game) {
    let sum = 0;
    for (let i = 0; i < game.length; i++) {
        if (game[i][0] > game[i][2]) {
            sum += 3;
        } else if (game[i][0] == game[i][2]) {
            sum +=1;
        } else {
            sum += 0;
        }
    }
    
    return sum;
}

// Alternate solution: 
// const points = game => game.reduce((acc, c) => {
//     return acc += c[0] > c[2] ? 3 : c[0] == c[2] ? 1 : 0;
// }, 0)

// Test: 
// test1 = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]
// test2 = ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]
// test3 = ["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]
// test4 = ["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]
// test5 = ["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]

// console.log(points(test1))
// console.log(points(test2))
// console.log(points(test3))
// console.log(points(test4))
// console.log(points(test5))
