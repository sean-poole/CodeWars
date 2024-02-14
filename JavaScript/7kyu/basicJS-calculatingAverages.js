/* Basic JS - Calculating Averages */

/*
Let's build a calculator that can calculate the average for an arbitrary number of arguments.
The test expects you to provide a Calculator object with an average method:
> Calculator.average()

The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.
It expects Calculator.average(3,4,5) to return 4.
*/

/*
P - Arbitrary number of arguments in the form of integers.
R - Average of arguments as an integer.
E - 
Calculator.average(3, 4, 5)                                     // 4
Calculator.average(3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3)       // 5.769230769230769
Calculator.average()                                            // 0
P - 
let Calculator = {
    average: function() {
        // Destructure arguments.
        // Calculate the sum of the arguments and return.
    }
}
*/

let Calculator = {
    average: function() {
        return [...arguments].reduce((acc, c) => acc += c, 0) / [...arguments].length || 0;
    }
}

// Test: 
// console.log(Calculator.average(3, 4, 5))
// console.log(Calculator.average(3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3))
// console.log(Calculator.average())
