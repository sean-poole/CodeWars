/* Which Section Did You Scroll To? */

/*
Your website is divided vertically in sections, and each can be of different size (height).
You need to establish the section index (starting at 0) you are at, given the scrollY and sizes of all sections.
Sections start with 0, so if first section is 200 high, it takes 0-199 "pixels" and second starts at 200.

Example:
With scrollY = 300 and sizes = [300,200,400,600,100]
the result will be 1 as it's the second section.

With scrollY = 1600 and size = [300,200,400,600,100]
the result will be -1 as it's past last section.

Given the scrollY integer (always non-negative) and an array of non-negative integers (with at least one element), calculate the index (starting at 0) or -1 if scrollY falls beyond last section (indication of an error).
*/

/*
P - One argument as an integer and one argument as an array of numbers. Integer will be non-negative. Array of integers will be non-negative and contain at least 1 element.
R - Integer representing the index where given integer scrollY falls in the given array.
E - 
getSectionIdFromScroll(299, [300, 200, 400, 600, 100])    // 0
getSectionIdFromScroll(300, [300, 200, 400, 600, 100])    // 1
getSectionIdFromScroll(1600, [300, 200, 400, 600, 100])   // -1
P - 
function getSectionIdFromScroll(scrollY, sizes) {
  // Create an integer variable to store a total amount. Initialize at 0.
  // Create an integer variable to store the current index. Initialize at 0.
  // While scrollY >= total,
  // If the index exceeds the amount of elements in the given array, return -1.
  // Add the element at the current index of the given array to total.
  // Increment index.
  // Once scrollY < total, return index - 1.
}
*/

function getSectionIdFromScroll(scrollY, sizes) {
  let total = 0;
  let index = 0;

  while (scrollY >= total) {
    if (index > sizes.length - 1) return -1;
    total += sizes[index];
    index++;
  }

  return index - 1;
}

// Alternate solution: 
// function getSectionIdFromScroll(scrollY, sizes) {
//   let sum = 0;
//   return sizes.findIndex(e => (sum += e) > scrollY);
// }

// Test: 
// console.log(getSectionIdFromScroll(299, [300, 200, 400, 600, 100]))
// console.log(getSectionIdFromScroll(300, [300, 200, 400, 600, 100]))
// console.log(getSectionIdFromScroll(1600, [300, 200, 400, 600, 100]))
