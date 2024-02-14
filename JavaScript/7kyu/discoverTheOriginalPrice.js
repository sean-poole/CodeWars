/* Discover The Original Price */

/*
We need to write some code to return the original price of a product, the return type must be of type decimal and the number must be rounded to two decimal places.

We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.

For example:
Given an item at $75 sale price after applying a 25% discount, the function should return the original price of that item before applying the sale percentage, which is ($100.00) of course, rounded to two decimal places.

DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price (discounted price), 25 is the sale percentage and 100 is the original price
*/

/*
P - Two arguments as integers.
R - Integer representing the original price, rounded to two decimal places.
E - 
discoverOriginalPrice(75, 25)     // 100
discoverOriginalPrice(25, 75)     // 100
discoverOriginalPrice(75.75, 25)  // 101
P - 
function discoverOriginalPrice(discountedPrice, salePercentage) {
  // Divide the discountedPrice by remaining percentage of the original price after the discount (100 - salePercentage).
  // Multiply by 100 to convert back to original price.
  // Round to two decimal places.
  // Multiply by 1 to convert rounded string to a number and remove trailing zeros.
  // Return integer.
}
*/

function discoverOriginalPrice(discountedPrice, salePercentage) {
  return (discountedPrice / (100 - salePercentage) * 100).toFixed(2) * 1;
}

// Test: 
// console.log(discoverOriginalPrice(75, 25))
// console.log(discoverOriginalPrice(25, 75))
// console.log(discoverOriginalPrice(75.75, 25))
