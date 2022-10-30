/* Array Filter */

/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:
getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

const getEvenNumbers = arr => arr.filter(x => x % 2 == 0);

// Test: 
// console.log(getEvenNumbers([1,2,3,6,8,10]))
// console.log(getEvenNumbers([1, 2]))
// console.log(getEvenNumbers([12, 14, 15]))
// console.log(getEvenNumbers([13, 15]))
// console.log(getEvenNumbers([1, 3, 9]))
