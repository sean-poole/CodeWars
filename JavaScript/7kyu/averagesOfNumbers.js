/* Averages Of Numbers */

/*
Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

Example:
Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]

If the array has 0 or 1 values or is null, your method should return an empty array.
*/

function averages(numbers) {
    let result = [];
    if (!numbers) return result;
    for (let i = 0; i < numbers.length - 1; i++) {
        result.push((numbers[i] + numbers[i + 1]) / 2);
    }

    return result;
}

// Test: 
// console.log(averages([2, 2, 2, 2, 2]))
// console.log(averages([2, -2, 2, -2, 2]))
// console.log(averages([1, 3, 5, 1, -10]))
