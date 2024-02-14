/* How Many Arguments */

/*
Examples: 
args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4
*/

const args_count = (...args) => args.length;

// Test: 
// console.log(args_count(1, 2))
// console.log(args_count())
// console.log(args_count("A", "B", "C"))
// console.log(args_count(["foo", "bar"]))
