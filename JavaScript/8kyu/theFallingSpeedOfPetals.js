/* The Falling Speed of Petals */

/*
When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

Notes:
> The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
> Pay attention to the data types.
> If the initial velocity is non-positive, the return value should be 0
*/

/*
P - One argument as an integer.
R - Integer representing the time it takes for a petal to reach the ground while falling at the given speed.
E - 
sakuraFall(5)     // 80
sakuraFall(10)    // 40
sakuraFall(-1)    // 0
P - 
function sakuraFall(v) {
  // Set distance as a constant by multiplying 5cm/s by 80 seconds.
  // If the given velocity is <= 0, return 0.
  // Else, divide distance by the given velocity.
  // Return integer.
}
*/

function sakuraFall(v) {
  const distance = 80 * 5;
  return v > 0 ? distance / v : 0;
}

// Test: 
// console.log(sakuraFall(5))
// console.log(sakuraFall(10))
// console.log(sakuraFall(-1))
