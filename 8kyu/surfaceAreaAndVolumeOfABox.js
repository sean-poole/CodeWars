/* Surface Area And Volume Of A Box */

/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

/*
P - Three arguments as integers. (+).
R - Array of 2 integers representing the surface area and volume of the given integers.
E - 
getSize(4, 2, 6)        // [88, 48]
getSize(10, 10, 10)     // [600, 1000]
P - 
function getSize(w, h, d) {
    // Surface area = 2(wh + hd + dw)
    // Volume = w * h * d
    // Return results as [area, volume].
}
*/

function getSize(w, h, d) {
    let surfaceArea = 2 * ((w * h) + (h * d) + (d * w));
    let volume = w * h * d;
    return [surfaceArea, volume];
}

// Test: 
// console.log(getSize(4, 2, 6))
// console.log(getSize(10, 10, 10))
// console.log(getSize(4, 2, 6)[0])
// console.log(getSize(4, 2, 6)[1])
