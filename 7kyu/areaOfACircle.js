/* Area Of A Circle */

/*
Complete the function circleArea so that it will return the area of a circle with the given radius. Round the returned number to two decimal places (except for Haskell). If the radius is not positive or not a number, return false.

Example:

circleArea(-1485.86);    //returns false
circleArea(0);           //returns false
circleArea(43.2673);     //returns 5881.25
circleArea(68);          //returns 14526.72
circleArea("number");    //returns false

*/

const circleArea = radius => radius > 0 ? +(Math.PI * Math.pow(radius, 2)).toFixed(2) : false;

// Test: 
// console.log(circleArea(-1485.86))
// console.log(circleArea(0))
// console.log(circleArea(43.2673))
// console.log(circleArea(68))
// console.log(circleArea("number"))
