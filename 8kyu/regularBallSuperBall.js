/* Regular Ball Super Ball */

/*
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/

function Ball(balltype) {
    this.ballType = balltype || "regular";
}

// Test: 
// const ball1 = new Ball();
// const ball2 = new Ball("super");

// console.log(ball1.ballType)
// console.log(ball2.ballType)
