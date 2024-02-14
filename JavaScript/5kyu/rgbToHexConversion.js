/* RGB To Hex Conversion */

/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

/*
P - Three arguments as integers. Values must be from 0 - 255. Values that fall out of that range are rounded to the closest valid value.
R - String representing the hexadecimal equivalent of the given RGB values.
E - 
rgb(0, 0, 0)          // "000000"
rgb(300, 255, 255)    // "FFFFFF"
P - 
function rgb(r, g, b) {
  // Call helper function to convert rgb value to hexadecimal
  // Format string and return.
}

// Create helper function that takes in one argument as an integer.
function componentToHex(color) {
  // If the given value falls outside the range of 0 - 255, round to the nearest valid value.
  // Convert the integer to hexadecimal string and capitalize it.
  // Prepend the value with a "0" if it has a length of 1.
  // Return string.
}
*/

function rgb(r, g, b) {
  return `${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

function componentToHex(color) {
  if (color < 0) color = 0;
  if (color > 255) color = 255;
  let hex = color.toString(16).toUpperCase();
  return hex.length === 1 ? `0${hex}` : hex;
}

// Test: 
// console.log(rgb(0, 0, 0))
// console.log(rgb(0, 0, -20))
// console.log(rgb(300, 255, 255))
// console.log(rgb(173, 255, 47))
