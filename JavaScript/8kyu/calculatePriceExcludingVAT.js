/* Calculate Price Excluding VAT */

/*
Write a function that calculates the original product price, without VAT.

Example: 
If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00
Thus, if your function receives 230.00 as input, it should return 200.00

Notes:
> VAT is always 15% for the purposes of this Kata.
> Round the result to 2 decimal places.
> If null value given then return -1
*/

/*
P - One argument as an integer.
R - Integer representing the given price with 15% removed. Round to 2 decimal places.
E - 
excludingVatPrice(230)  // 200.00
excludingVatPrice(123)  // 106.96
P - 
function excludingVatPrice(price) {
  // If the given integer === null, return 1.
  // Divide the given integer by 1.15.
  // Round to 2 decimal places.
  // Return integer.
}
*/

function excludingVatPrice(price) {
  return price === null ? -1 : +(price / 1.15).toFixed(2);
}

// Test: 
// console.log(excludingVatPrice(230))
// console.log(excludingVatPrice(123))
