/* Is He Gonna Survive? */

/*
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)
*/

function hero(bullets, dragons) {
    return bullets / 2 >= dragons;
}

// Alternate solution:
// const hero = (bullets, dragons) => bullets / 2 >= dragons;

// Test: 
// b1 = 10
// d1 = 5

// b2 = 7
// d2 = 4

// b3 = 4
// d3 = 5

// b4 = 100
// d4 = 40

// b5 = 1500
// d5 = 751

// b6 = 0
// d6 = 1

// console.log(hero(b1, d1))
// console.log(hero(b2, d2))
// console.log(hero(b3, d3))
// console.log(hero(b4, d4))
// console.log(hero(b5, d5))
// console.log(hero(b6, d6))