/* You Only Need One */

/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

function check(a, x) {
    return a.includes(x);
}

// Alternate solution:
// const check = (a, x) => a.includes(x);

// Test
// testA1 = [66, 101]
// testX1 = 66

// testA2 = [101, 45, 75, 105, 99, 107]
// testX2 = 107

// testA3 = ["t", "e", "s", "t"]
// testX3 = "e"

// testA4 = ["what", "a", "great", "kata"]
// testX4 = "kat"

// console.log(check(testA1, testX1))
// console.log(check(testA2, testX2))
// console.log(check(testA3, testX3))
// console.log(check(testA4, testX4))
