/* Training JS #2: Basic Data Types - Number */

/*
In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..
Numbers can use operators such as + - * / %

Task:
I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.
*/

/*
P - 6 Global variables representing integers. 5 broken functions taking in two integers as arguments.
R - 5 revised functions using the given variables to return a result of 100.
E - 
equal1()        // 100
equal2()        // 100
P - 
function equal1() {
    // Given: return a + b
    // Find a combination from the given variables that will return 100.
    // let a = v1 (50)
    // let b = v1 (50)
    // 50 + 50 == 100
}
*/

let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

const equal1 = () => v1 + v1;

const equal2 = () => v3 - v1;

const equal3 = () => v1 * v5;

const equal4 = () => v4 / v5;

const equal5 = () => v2 % v4;

// Test: 
// console.log(equal1())
// console.log(equal2())
// console.log(equal3())
// console.log(equal4())
// console.log(equal5())
