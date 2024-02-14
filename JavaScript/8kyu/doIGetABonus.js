/* Do I Get A Bonus? */

/*
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).
*/

/*
P - Salary given as an integer. Bonus given as a boolean.
R - If Bonus == true, salary x 10. Else, salary. Return number as a string prefixed with "£".
E - 
bonusTime(10000, true)          // "£100000"
bonusTime(10000, false)         // "£10000"
P - 
function bonusTime(salary, bonus) {
    // If bonus == true, return salary x 10.
    // Else, return salary.
}
*/

const bonusTime = (salary, bonus) => bonus ? `£${salary * 10}` : `£${salary}`;

// Test: 
// console.log(bonusTime(10000, true))
// console.log(bonusTime(25000, true))
// console.log(bonusTime(10000, false))
// console.log(bonusTime(60000, false))
// console.log(bonusTime(2, true))
// console.log(bonusTime(78, false))
// console.log(bonusTime(67890, true))
