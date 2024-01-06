/* Bouncing Balls */

/*
A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.
He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
His mother looks out of a window 1.5 meters from the ground.
How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3
- h = 3, bounce = 1, window = 1.5, result is -1 
(Condition 2) not fulfilled).
*/

/*
P - Three arguments as integers. "h" parameter must be > 0. "bounce" parameter must be > 0 && < 1. "window" parameter must be less than "h".
R - Integer representing how many times the ball passes the given window parameter. Return -1 if any of the parameters are invalid.
E - 
bouncingBall(3.0, 0.66, 1.5)    // 3
bouncingBall(30.0, 0.66, 1.5)   // 15
bouncingBall(3.0, 1.0, 1.5)     // -1
P - 
function bouncingBall(h, bounce, window) {
  // Verify that all parameters are valid.
  // Create an integer variable to store count starting at 1 (Dropping the ball).
  // While the ball is traveling...
  // ...calculate h * bounce to get the new height of the ball after it bounces.
  // Set new height.
  // If the new height of the ball is greater than the given window parameter...
  // ...increment count by 2. (Ball going up, ball going down).
  // Else, break out of the while loop.
  // Return integer.
}
*/

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

  let count = 1;

  while(h) {
    h = h * bounce;
    if (h > window) {
      count += 2;
    } else {
      break;
    }
  }

  return count;
}

// Test: 
// console.log(bouncingBall(3.0, 0.66, 1.5))
// console.log(bouncingBall(30.0, 0.66, 1.5))
// console.log(bouncingBall(3.0, 1.0, 1.5))
