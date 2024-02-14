/* Pete, The Baker */

/*
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:
// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
*/

/*
P - Two arguments as objects containing key:values of ingredients:quantity.
R - Integer representing how many cakes can be made.
E - 
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})                  // 2
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})    // 0
P - 
function cakes(recipe, available) {
  // Create an empty array variable.
  // Iterate through the given recipe ingredients.
  // If the available ingredients contains the current recipe ingredient..
  // ..divide the available quantity by the recipe quantity and round down..
  // ..to represent the amount of times it can be used.
  // Push this result to the created array.
  // Else, the available ingredients does not contain the current recipe ingredient..
  // ..and we cannot make the recipe. Return 0.
  // Once all ingredients have been checked, return the lowest number from the created array.
}
*/

function cakes(recipe, available) {
  let count = [];

  for (ingredient in recipe) {
    if (ingredient in available) {
      count.push(Math.floor(available[ingredient] / recipe[ingredient]));
    } else {
      return 0;
    }
  }

  return Math.min(...count);
}

// Alternate solution: 
// const cakes = (recipe, available) => {
//   return Math.min(
//     ...Object.keys(recipe).map(key => Math.floor(available[key] / recipe[key] || 0))
//   )
// }

// Test: 
const recipe1 = {flour: 500, sugar: 200, eggs: 1}
const available1 = {flour: 1200, sugar: 1200, eggs: 5, milk: 200}
// console.log(cakes(recipe1, available1))

const recipe2 = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}
const available2 = {sugar: 500, flour: 2000, milk: 2000}
// console.log(cakes(recipe2, available2))
