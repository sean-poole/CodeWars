/* If you can't sleep, just count sheep */

/*
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

const countSheep = num => {
    let str = "";
    for (let i = 1; i <= num; i++) {
        str += `${i} sheep...`
    }
    return str;
};

// Test: 
console.log(countSheep(0))
console.log(countSheep(1))
console.log(countSheep(2))
console.log(countSheep(3))
