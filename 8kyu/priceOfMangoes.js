/* Price of Mangoes */

/*
There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

Examples: 
> mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
> mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
> mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
> mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free
*/

/*
P - Two arguments as integers. First integer is the quantity of mangoes. Second integer is the cost of each mango. One mango is included for free for every 2 mangoes purchased.
R - Integer representing total cost of the mangoes.
E - 
mango(3, 3)     // 6
mango(9, 5)     // 30
P - 
function mango(quantity, price) {
  // Divide quantity by 3 and round down to get the number of free mangoes.
  // Subtract this number from the quantity to get the number of mangoes that need to be paid for.
  // Multiply this number by the price to get the total cost.
  // Return integer.
}
*/

const mango = (quantity, price) => price * (quantity - Math.floor(quantity / 3));

// Test: 
// console.log(mango(3, 3))
// console.log(mango(9, 5))
