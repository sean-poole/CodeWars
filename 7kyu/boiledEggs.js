/* Boiled Eggs */

/*
You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?

Your Task: 
Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

Rules: 
> you can put at most 8 eggs into the pot at once
> it takes 5 minutes to boil an egg
> we assume, that the water is boiling all the time (no time to heat up)
> for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it

Example (Input --> Output):
0 --> 0
5 --> 5
10 --> 10
*/

/*
P - One argument as an integer. Will always be >= 0.
R - Integer representing the number of minutes required to boil all the eggs. (Pot can cook 8 eggs at one time. 5 minutes per egg.)
E - 
cookingTime(5)      // 5
cookingTime(10)     // 10
P - 
function cookingTime(eggs) {
  // Divide the given number of eggs by 8 and round up.
  // Multiply the result by 5.
  // Return integer.
}
*/

const cookingTime = eggs => Math.ceil(eggs / 8) * 5;

// Test: 
// console.log(cookingTime(0))
// console.log(cookingTime(5))
// console.log(cookingTime(10))
