/* USD => CNY */

/*
Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

Examples (Input -> Output): 
> 15  -> '101.25 Chinese Yuan'
> 465 -> '3138.75 Chinese Yuan'

The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")
*/

/*
P - One argument as an integer.
R - String representing the conversion of the given USD amount to CNY, rounded to 2 decimal places.
E - 
usdcny(15)      // "101.25 Chinese Yuan"
usdcny(465)     // "3138.75 Chinese Yuan"
P - 
function usdcny(usd) {
  // Multiply the given integer by 6.75 and round to 2 decimal places.
  // Return as formatted string.
}
*/

function usdcny(usd) {
  const cny = (usd * 6.75).toFixed(2);
  return `${cny} Chinese Yuan`;
}

// Test: 
// console.log(usdcny(15))
// console.log(usdcny(465))
