/* Array Element Parity */

/*
In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:
[1, -1, 2, -2, 3] => 3
3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4
-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3
(the only-positive or only-negative integer may appear more than once)
*/

/*
P - One argument as an array of integers. Elements will have both (+) and (-), except for one element which is (+) or (-).
R - Integer representing the element that is either (+) or (-).
E - 
solve([1,-1,2,-2,3])        // 3
solve([-3,1,2,3,-1,-4,-2])  // -4
P - 
function solve(arr) {
    // Find the element that does not have its opposite value in the given array.
    // Return the element as an integer.
}
*/

const solve = arr => arr.find(e => !arr.includes(-e));

// Alternate solution: 
// const solve = arr => [...new Set(arr)].reduce((acc, c) => acc += c, 0);

// Test: 
// console.log(solve([1,-1,2,-2,3]))
// console.log(solve([-3,1,2,3,-1,-4,-2]))
// console.log(solve([1,-1,2,-2,3,3]))
// console.log(solve([-110,110,-38,-38,-62,62,-38,-38,-38]))
// console.log(solve([-9,-105,-9,-9,-9,-9,105]))
