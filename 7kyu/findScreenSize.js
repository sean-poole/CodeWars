/* Find Screen Size */

/*
Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits. He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box. Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?

The Challenge: 
Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.
*/

/*
P - One argument as an integer. One argument as a string written as "Width:Height" representing a screen's aspect ratio.
R - String representing the screen's dimensions determined by the given width & aspect ratio.
E - 
findScreenHeight(1024, "4:3")   // "1024x768"
findScreenHeight(1280, "16:9")  // "1280x720"
findScreenHeight(3840, "32:9")  // "3840x1080"
P - 
function findScreenHeight(width, ratio) {
  // Split the given ratio into two integers.
  // Multiply the given width by the ratio's height.
  // Divide the product by the ratio's width to calculate the screen's height.
  // Remove trailing decimals.
  // Format string as "WidthxHeight".
  // Return string.
}
*/

function findScreenHeight(width, ratio) {
  let [widthRatio, heightRatio] = ratio.split(":");
  let height = ((width * heightRatio) / widthRatio).toFixed(0);

  return `${width}x${height}`;
}

// Test: 
// console.log(findScreenHeight(1024, "4:3"))
// console.log(findScreenHeight(1280, "16:9"))
// console.log(findScreenHeight(3840, "32:9"))
