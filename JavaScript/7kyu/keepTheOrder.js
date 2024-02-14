/* Keep The Order */

/*
Task:
Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.

Do not modify the input.

Some examples:
keepOrder([1, 2, 3, 4, 7], 5) //=> 4
                      ^(index 4)

keepOrder([1, 2, 3, 4, 7], 0) //=> 0
          ^(index 0)

keepOrder([1, 1, 2, 2, 2], 2) //=> 2
                ^(index 2)

*/

function keepOrder(arr, val) {
    let index = 0;
    while (val > arr[index]) {
        index++;
    }

    return index;
}

// Alternate solution: 
// const keepOrder = (arr, val) => arr.filter(e => e < val).length;

// Test: 
// console.log(keepOrder([1, 2, 3, 4, 7], 5))
// console.log(keepOrder([1, 2, 3, 4, 7], 0))
// console.log(keepOrder([1, 1, 2, 2, 2], 2))
// console.log(keepOrder([1, 2, 3, 4], 5))
// console.log(keepOrder([1, 2, 3, 4], -1))
// console.log(keepOrder([1, 2, 3, 4], 2))
// console.log(keepOrder([1, 2, 3, 4], 0))
// console.log(keepOrder([1, 2, 3, 4], 1))
// console.log(keepOrder([1, 2, 3, 4], 2))
// console.log(keepOrder([1, 2, 3, 4], 3))
