/* Grasshopper - Terminal Game Combat Function */

/*
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
*/

/*
P - Two arguments as integers, health and damage.
R - Health - damage. Health cannot be less than 0.
E - 
combat(100, 5)          // 95
combat(20, 30)          // 0, Health cannot go below 0.
P - 
function combat(health, damage) {
    // Check if health is greater than damage.
    // If true, return health - damage.
    // Otherwise, return 0.
}
*/

const combat = (health, damage) => health > damage ? health - damage : 0;

// Test: 
// console.log(combat(100, 5))
// console.log(combat(92, 8))
// console.log(combat(20, 30))
