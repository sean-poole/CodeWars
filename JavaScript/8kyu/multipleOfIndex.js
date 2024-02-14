/* Multiple Of Index */

/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
[68, -1, 1, -7, 10, 10] => [-1, 10]
[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/

/*
P - One argument as an array of integers. Contains at least one element. (+) or (-).
R - New array consisting of elements which are multiples of their index within the given array.
E - 
multipleOfIndex([22, -6, 32, 82, 9, 25])        // [-6, 32, 25]
multipleOfIndex([68, -1, 1, -7, 10, 10])        // [-1, 10]
P - 
function multipleOfIndex(array) {
    // Filter the given array to check for elements that are divisible by its index.
    // Return the filtered array.
}
*/

const multipleOfIndex = array => array.filter((e, i) => e % i === 0);

// Test: 
// console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))
// console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]))
// console.log(multipleOfIndex([11, -11]))
// console.log(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]))
// console.log(multipleOfIndex([28,38,-44,-99,-13,-54,77,-51]))
// console.log(multipleOfIndex([-1,-49,-1,67,8,-60,39,35]))
