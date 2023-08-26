/* Tip Calculator */

/*
Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:
> Terrible: tip 0%
> Poor: tip 5%
> Good: tip 10%
> Great: tip 15%
> Excellent: tip 20%

The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
> "Rating not recognised" in Javascript, Python and Ruby...
> ...or null in Java
> ...or -1 in C#

Because you're a nice person, you always round up the tip, regardless of the service.
*/

/*
P - One argument as an integer and one argument as a string.
R - Integer representing the tip amount based on the given arguments.
E - 
calculateTip(20, "Excellent")   // 4
calculateTip(26.95, "good")     // 3
P - 
function calculateTip(amount, rating) {
  // Create a variable to store the tip percentage.
  // Lowercase the given rating string and determine the tip percentage.
  // Apply the tip percentage to the given amount. Round up.
  // Return tip amount as an integer.
}
*/

function calculateTip(amount, rating) {
  let percentage = 0;
  switch (rating.toLowerCase()) {
    case "terrible": percentage = 0; break;
    case "poor": percentage = 0.05; break;
    case "good": percentage = 0.1; break;
    case "great": percentage = 0.15; break;
    case "excellent": percentage = 0.2; break;
    default: return "Rating not recognised";
  }

  const tip = Math.ceil(amount * percentage);

  return tip;
}

// Test: 
// console.log(calculateTip(20, "Excellent"))
// console.log(calculateTip(26.95, "good"))
