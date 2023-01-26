/* esreveR */

/*
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
(the dedicated built-in(s) functionalities are deactivated)
*/

function reverse(array) {
    let reverse = [];
    for (e in array) {
        reverse.unshift(array[e]);
    }

    return reverse;
}

// Test: 
// console.log(reverse([1, 2, 3]))
// console.log(reverse([1, null, 14, "two"]))
