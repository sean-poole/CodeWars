/* Sorting By Bits */

/*
In this kata you're expected to sort an array of 32-bit integers in ascending order of the number of on bits they have.

E.g Given the array [7, 6, 15, 8]
> 7 has 3 on bits (000...0111)
> 6 has 2 on bits (000...0011)
> 15 has 4 on bits (000...1111)
> 8 has 1 on bit (000...1000)

So the array in sorted order would be [8, 6, 7, 15].

In cases where two numbers have the same number of bits, compare their real values instead.
E.g between 10 (...1010) and 12 (...1100), they both have the same number of on bits '2' but the integer 10 is less than 12 so it comes first in sorted order.
Your task is to write the function sortBybit() that takes an array of integers and sort them as described above.
Note: your solution has to sort the array in place.
Example:
[3, 8, 3, 6, 5, 7, 9, 1]   =>    [1, 8, 3, 3, 5, 6, 9, 7]
*/

/*
P - Array of integers.
R - Given array sorted in ascending order based on the number of 'on' bits they have.
E - 
sortByBit([3, 8, 3, 6, 5, 7, 9, 1])                     // [1, 8, 3, 3, 5, 6, 9, 7]
sortByBit([9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0])     // [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]
P - 
function sortByBit(arr) {
    // Create helper function to count the number of 'on' bits of a binary number.
    // Sort the array by the number of 'on' bits it contains, or by their numerical values if the count is the same.
}

*/

function sortByBit(arr) {
    const countBits = num => [...(num).toString(2)].reduce((acc, c) => c === "1" ? acc += 1 : acc, 0);
    return arr.sort((a, b) => countBits(a) - countBits(b) || a - b);
}

// Test: 
// console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]))
// console.log(sortByBit([9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0]))
