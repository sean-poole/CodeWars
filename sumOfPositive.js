/* Sum Of Positive */

/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
    let sum = 0;
    arr.forEach((x) => {
        if (x > 0) {
            sum += x;
        }
    })
    return sum;
}

/*
function positiveSum(arr) {
    return arr.reduce((sum, x) => sum + (x > 0 ? x : 0), 0);
}
*/