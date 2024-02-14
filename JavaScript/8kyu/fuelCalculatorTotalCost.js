/* Fuel Calculator: Total Cost */

/*
In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!

Note: 
1 Dollar = 100 Cents
*/

/*
P - Two arguments as integers.
R - Integer representing the cost of gas rounded to 2 decimals.
E - 
fuelPrice(5, 1.23)    // 5.65
fuelPrice(8, 2.5)     // 18.40
fuelPrice(5, 5.6)     // 27.50
P - 
function fuelPrice(litres, pricePerLitre) {
  // Calculate the pricePerLitre discount by subtracting 5 cents per 2 litres purchased up to a max discount of 25 cents.
  // Multiply the litres purchased by the adjusted pricePerLitre.
  // Round the product to 2 decimals.
  // Return integer.
}
*/

function fuelPrice(litres, pricePerLitre) {
  for (let i = 2; i <= 10; i += 2) {
    if (litres >= i) pricePerLitre -= 0.05;
  }

  return Number((litres * pricePerLitre).toFixed(2));
}

// Test: 
// console.log(fuelPrice(5, 1.23))
// console.log(fuelPrice(8, 2.5))
// console.log(fuelPrice(5, 5.6))
