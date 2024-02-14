/* Kata Example Twist */

/*
This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites 1,000 times.
*/

/*
P - Empty array.
R - Fill the given array  with "codewars" 1000 times.
E - console.log(website.length)   // 1000
P - let websites = 
*/

let websites = new Array(1000).fill("codewars");

// Test: 
// console.log(websites.length);
// console.log(websites.length === 1000)
