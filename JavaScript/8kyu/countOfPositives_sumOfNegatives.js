/* Count Of Positives / Sum Of Negatives */

/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

// function countPositivesSumNegatives(input) {
//     let e1 = input.filter(x => x > 0).length;
//     let e2 = input.filter(x => x < 0);
//     let sum = 0;
//     e2.forEach(e => sum += Number(e))
//     return [e1, sum];
// }

function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1) {
        return []
    } else {
        let e1 = input.filter(x => x > 0).length;
        let e2 = input.reduce((sum, x) => sum + (x < 0 ? x : 0), 0);

        return [e1, e2]
    }
}

// Test
// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// arr2 = [0, 0]
// console.log(countPositivesSumNegatives(arr1))
// console.log(countPositivesSumNegatives(arr2))
