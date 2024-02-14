/* Find Count Of Most Frequent Item In An Array */

/*
Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

Example: 
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
output: 5 

The most frequent number in the array is -1 and it occurs 5 times.
*/

function mostFrequentItemCount(collection) {
    return collection.length ? Math.max(...collection.map(x => collection.filter(y => y == x).length)) : 0;
}

// Test: 
// console.log(mostFrequentItemCount([3, -1, -1]))
// console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]))
