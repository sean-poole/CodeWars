/* Array Leaders - Array Series #3 */

/*
Definition: 
An element is leader if it is greater than The Sum all the elements to its right side.

Task: 
Given an array/list [] of integers , Find all the LEADERS in the array.

Notes: 
> Array/list size is at least 3 .
> Array/list's numbers Will be mixture of positives , negatives and zeros
> Repetition of numbers in the array/list could occur.
> Returned Array/list should store the leading numbers in the same order in the original array/list .

Input >> Output Examples: 
arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
Explanation:
4 is greater than the sum all the elements to its right side
Note : The last element 0 is equal to right sum of its elements (abstract zero).

arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
Explanation:
17 is greater than the sum all the elements to its right side
5 is greater than the sum all the elements to its right side
Note : The last element 2 is greater than the sum of its right elements (abstract zero).

arrayLeaders ({5, 2, -1}) ==> return {5, 2}
Explanation:
5 is greater than the sum all the elements to its right side
2 is greater than the sum all the elements to its right side
Note : The last element -1 is less than the sum of its right elements (abstract zero).

arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
Explanation:
0 is greater than the sum all the elements to its right side
-1 is greater than the sum all the elements to its right side
3 is greater than the sum all the elements to its right side
Note : The last element 2 is greater than the sum of its right elements (abstract zero).
*/

/* 
P - One argument as an array of integers. (+) or (-). Will contain at least 3 elements.
R - Array of numbers where its value is greater than the sum of numbers that follow.
E - 
arrayLeaders([1, 2, 3, 4, 0])           // [4]
arrayLeaders([-36, -12, -27])           // [-36, -12]
arrayLeaders([5, -2, 2])                // [5, 2]
P - 
function arrayLeaders(numbers) {
    // Iterate through the given array.
    // Filter for elements that are greater in value than the sum of the numbers that follow.
    // Return array.
}
*/

const arrayLeaders = numbers => numbers.filter((n, i, a) => n > a.slice(i + 1).reduce((acc, c) => acc += c, 0));

// Test: 
// console.log(arrayLeaders([1, 2, 3, 4, 0]))
// console.log(arrayLeaders([16, 17, 4, 3, 5, 2]))
// console.log(arrayLeaders([-1, -29, -26, -2]))
// console.log(arrayLeaders([-36, -12, -27]))
// console.log(arrayLeaders([5, -2, 2]))
// console.log(arrayLeaders([0, -1, -29, 3, 2]))
