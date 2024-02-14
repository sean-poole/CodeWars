/* Compare Versions */

/*
Karan's company makes software that provides different features based on the version of operating system of the user.

To compare versions, Karan currently parses both version numbers as floats.

While this worked for OS versions 10.6, 10.7, 10.8 and 10.9, the operating system company just released OS version 10.10. This causes his method to fail, as 10.9 is greater than 10.10 when interpreting both as numbers, despite being a lesser version.

Help Karan by writing him a function which compares two versions, and returns whether or not the first one is greater than or equal to the second.

Specification notes:

Versions are provided as strings of one or more integers separated by ..
The version strings will never be empty.
The two versions are not guaranteed to have an equal amount of sub-versions, when this happens assume that all missing sub-versions are zero.
Two versions which differ only by trailing zero sub-versions will never be given.
*/

/*
P - Two arguments as strings.
R - Boolean representing if the first argument is a later version than the second argument.
E - 
compareVersions("11", "10")         // True
compareVersions("11", "11")         // False
compareVersions("10.4.6", "10.4")   // True
compareVersions("10.4", "11")       // False
compareVersions("10.4", "10.10")    // False
compareVersions("10.4.9", "10.5")   // False
P - 
function compareVersions(version1, version2) {
  // Create array variables that contain each given version split at "."
  // Create a variable that determines the max length between version numbers.
  // Iterate up to the max length.
  // Create integer variables to store the numbers at the current iteration in both versions. Default to 0 if a version does not contain an element at the current iteration.
  // Evaluate elements at the current iteration.
  // If the current element in version1 < the current element in version2, return false.
  // If the current element in version1 > the current element in version2, return true.
  // If the loop completes without returning a value, evaluate version1.length >= version2.length.
  // Return boolean.
}
*/

function compareVersions(version1, version2) {
  let arr1 = version1.split(".");
  let arr2 = version2.split(".");

  let max = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < max; i++) {
    let num1 = Number(arr1[i] || 0);
    let num2 = Number(arr2[i] || 0);

    if (num1 < num2) {
      return false;
    } else if (num1 > num2) {
      return true;
    }
  }
  
  return arr1.length >= arr2.length;
}

// Test: 
// console.log(compareVersions("11", "10"))
// console.log(compareVersions("11", "11"))
// console.log(compareVersions("10.4.6", "10.4"))
// console.log(compareVersions("10.4", "11"))
// console.log(compareVersions("10.4", "10.10"))
// console.log(compareVersions("10.4.9", "10.5"))
