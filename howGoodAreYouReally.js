/* How Good Are You Really? */

/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((sum, c) => sum + c, 0) / classPoints.length;
}

// Test: 
// classTest1 = [2, 3]
// myTest1 = 5

// classTest2 = [100, 40, 34, 57, 29, 72, 57, 88]
// myTest2 = 75

// classTest3 = [12, 23, 34, 45, 56, 67, 78, 89, 90]
// myTest3 = 9

// console.log(betterThanAverage(classTest1, myTest1))
// console.log(betterThanAverage(classTest2, myTest2))
// console.log(betterThanAverage(classTest3, myTest3))
