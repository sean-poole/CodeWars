/* Miles Per Gallon to Kilometers Per Liter */

/*
Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points.

Some useful associations relevant to this kata:

1 Imperial Gallon = 4.54609188 litres
1 Mile = 1.609344 kilometres
*/

/*
P - One argument as an integer.
R - Integer representing the given miles per gallon converted to kilometers per liter. Round to two decimal places.
E - 
converter(10)   // 3.54
converter(20)   // 7.08
converter(30)   // 10.62
P - 
function converter(mpg) {
  // Multiply the given number by miles converted to kilometers (1.609344).
  // Divide the product by gallons converted to litres (4.54609188).
  // Round to two decimal places.
  // Return integer.
}
*/

const converter = mpg => +((mpg * 1.609344) / 4.54609188).toFixed(2);

// Test: 
// console.log(converter(10))
// console.log(converter(20))
// console.log(converter(30))
