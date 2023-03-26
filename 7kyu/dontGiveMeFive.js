/* Don't Give Me Five */

/*
Don't give me five!
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:
> 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
> 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!
*/

/*
P - Two arguments: start number and end number as integers. (+) or (-). Start number will always be < end number.
R - Count of all numbers between (& including) the start and end numbers without a 5 in it.
E - 
dontGiveMeFive(1, 9)        // 8
dontGiveMeFive(4, 17)       // 12
P - 
function dontGiveMeFive(start, end) {
    // Initialize count variable.
    // Iterate through numbers from start number to end number.
    // If index number contains 5, move on to next number.
    // Otherwise, increase count variable.
    // Return count variable.
}
*/

function dontGiveMeFive(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (!String(i).includes("5")) count++;
    }

    return count;
}

// Test: 
// console.log(dontGiveMeFive(1, 9))
// console.log(dontGiveMeFive(4, 17))
