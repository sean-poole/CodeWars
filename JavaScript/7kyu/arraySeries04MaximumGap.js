/* Array Series #4 - Maximum Gap */

/*
Task: 
Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

Notes: 
> Array/list size is at least 3 .
> Array/list's numbers Will be mixture of positives and negatives also zeros_
> Repetition of numbers in the array/list could occur.
> The Maximum Gap is computed Regardless the sign.

Input >> Output Examples: 
maxGap ({13,10,5,2,9}) ==> return (4)
> Explanation:
> The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4.

maxGap ({-3,-27,-4,-2}) ==> return (23)
> Explanation:
> The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23 .
> Note : Regardless the sign of negativity.

maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
> Explanation:
> The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .
> Note : Regardless the sign of negativity.

maxGap ({-54,37,0,64,640,0,-15}) //return (576)
> Explanation:
> The Maximum Gap after sorting the array is 576 , The difference between  | 64 - 640 | = 576 .
> Note : Regardless the sign of negativity.
*/

/*
P - One argument as an array of integers.
R - Integer representing the largest difference between two elements after sorting the given array.
E - 
maxGap([13,10,2,9,5])       // 4
maxGap([1,1,1])             // 0
P - 
function maxGap(numbers) {
    // Create a variable to store the largest difference.
    // Sort the given array in descending order.
    // Iterate through the array and get the difference of integers at index and index + 1.
    // Compare the current difference with the stored largest difference. Update largest difference accordingly.
    // Return largest difference as an integer.
}
*/

function maxGap(numbers) {
    let largest = 0;
    numbers = numbers.sort((a, b) => b - a);
    for (let i = 0; i < numbers.length - 1; i++) {
        let difference = numbers[i] - numbers[i + 1];
        if (difference > largest) largest = difference;
    }

    return largest;
}

// Test: 
// console.log(maxGap([13,10,2,9,5]))
// console.log(maxGap([13,3,5]))
// console.log(maxGap([24,299,131,14,26,25]))
// console.log(maxGap([-3,-27,-4,-2]))
// console.log(maxGap([-7,-42,-809,-14,-12]))
// console.log(maxGap([12,-5,-7,0,290]))
// console.log(maxGap([-54,37,0,64,-15,640,0]))
// console.log(maxGap([130,30,50]))
// console.log(maxGap([1,1,1]))
// console.log(maxGap([-1,-1,-1]))
