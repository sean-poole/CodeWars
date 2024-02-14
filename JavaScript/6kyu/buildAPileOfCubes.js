/* Build A Pile Of Cubes */

/*
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n - 1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as:
n^3 + (n - 1)^3 + (n - 2)^3 + ... 1^3 = m 
if such a n exists or -1 if there is no such n.

Examples:
> findNb(1071225) --> 45
> findNb(91716553919377) --> -1
*/

/* 
P - One argument as an integer representing the total volume of the building.
R - Integer representing the total number of cubes needed to fill the volume of the given integer.
E - 
findNb(4183059834009)     // 2022
findNb(24723578342962)    // -1
P - 
function findNb(m) {
  // Create an integer variable to store the number of cubes. Start at 1.
  // Create an integer variable to store the volume of cubes. Start at 0.
  // While the volume is <= given m,
  // ...cube the number of cubes (cubes^3) and add to `volume` variable.
  // If the volume === m, return the number of cubes.
  // Otherwise, increment cubes by 1 and repeat.
  // If volume exceeds m, return -1.
}
*/

function findNb(m) {
  let cubes = 1;
  let volume = 0;

  while (volume <= m) {
    volume += cubes ** 3;
    if (volume === m) return cubes;
    cubes++;
  }

  return -1;
}

// Test: 
// console.log(findNb(4183059834009))
// console.log(findNb(24723578342962))
// console.log(findNb(135440716410000))
// console.log(findNb(40539911473216))
