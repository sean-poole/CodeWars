/* Allan Partridge II - Apple Turnover */

/*
Alan is known for referring to the temperature of the apple turnover as Hotter than the sun!. According to space.com the temperature of the sun's corona is 2,000,000 degrees Celsius, but we will ignore the science for now.

Task: 
Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

Note: 
Input will either be a positive integer (or a string for untyped languages).
*/

/*
P - Integer or string of a number. Only (+). 
R - x ** 2 > 1000 ? stringOne : stringTwo
E - 
apple("50")         // "It's hotter than the sun!!"
apple(4)            // "Help yourself to a honeycomb Yorkie for the glovebox."
P - 
function apple(x) {
    // Square given x.
    // If the returned value is > 1000, print "It's hotter than the sun!!"
    // Else, print "Help yourself to a honeycomb Yorkie for the glovebox."
}
*/

const apple = x => x ** 2 > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."

// Test: 
// console.log(apple("50"))
// console.log(apple(4))
