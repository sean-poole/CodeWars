/* Ball Upwards */

/*
You throw a ball vertically upwards with an initial speed v (in km per hour). The height h of the ball at each time t is given by h = v*t - 0.5*g*t*t where g is Earth's gravity (g ~ 9.81 m/s**2). A device is recording at every tenth of second the height of the ball. For example with v = 15 km/h the device gets something of the following form: (0, 0.0), (1, 0.367...), (2, 0.637...), (3, 0.808...), (4, 0.881..) ... where the first number is the time in tenth of second and the second number the height in meter.

Task: 
Write a function max_ball with parameter v (in km per hour) that returns the time in tenth of second of the maximum height recorded by the device.

Examples: 
max_ball(15) should return 4
max_ball(25) should return 7

Notes: 
> Remember to convert the velocity from km/h to m/s or from m/s in km/h when necessary.
> The maximum height recorded by the device is not necessarily the maximum height reached by the ball.
*/

function maxBall(v0) {
    v0 /= 3.6;
    const gravity = 9.81;
    let time = 0;
    let height = 0;
    let index = 0;
    let maxIndex = 0;
    let maxHeight = 0;
    let result = {};

    while ((v0 * time) - (0.5 * gravity * time * time) >= 0) {
        height = (v0 * time) - (0.5 * gravity * time * time);
        result[index] = height;

        if (height > maxHeight) {
            maxHeight = height;
            maxIndex = index;
        }

        time += 1 / 10;
        index++;
    }
    
    return maxIndex;
}

// Alternate solution: 
// function maxBall(v0) {
//     const g = 9.81;
//     const mpsToKph = 3.6;
//     const secondsToTenths = 10;

//     return Math.round(secondsToTenths * v0 / mpsToKph / g);
// }

// Test: 
// console.log(maxBall(15))
// console.log(maxBall(37))
// console.log(maxBall(45))
// console.log(maxBall(99))
// console.log(maxBall(85))
