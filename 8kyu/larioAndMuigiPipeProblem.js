/* Lario And Muigi Pipe Problem */

/*
Issue: 
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

Task: 
Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example: 
> Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
*/

/*
P - Array of numbers. Ascending order. Can contain (-). No decimals.
R - Array of numbers that increment by +1 for each index from the min to max value.
E - 
    > Input: [1, 3, 5, 6, 7, 8]
    > Output: [1, 2, 3, 4, 5, 6, 7, 8]
P - 
function pipeFix(numbers) {
    // store last value of given array
    // fill and return array from first element to last element
}
*/

function pipeFix(numbers) {
    let result = [];
    let first = numbers[0];
    let last = numbers[numbers.length - 1];
    for (let i = first; i <= last; i++) {
        result.push(i);
    }

    return result;
}

// Test: 
// console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]))
// console.log(pipeFix([1, 2, 3, 12]))
// console.log(pipeFix([6, 9]))
// console.log(pipeFix([-1, 4]))
// console.log(pipeFix([1, 2, 3]))
