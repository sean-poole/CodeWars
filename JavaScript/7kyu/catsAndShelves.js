/* Cats and Shelves */

/*
An infinite number of shelves are arranged one above the other in a staggered fashion.
The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:

                 ┌────────┐
                 │-6------│
                 └────────┘
┌────────┐       
│------5-│        
└────────┘  ┌─────► OK!
            │    ┌────────┐
            │    │-4------│
            │    └────────┘
┌────────┐  │
│------3-│  │     
BANG!────┘  ├─────► OK! 
  ▲  |\_/|  │    ┌────────┐
  │ ("^-^)  │    │-2------│
  │ )   (   │    └────────┘
┌─┴─┴───┴┬──┘
│------1-│
└────────┘

Input: 
Start and finish shelf numbers (always positive integers, finish no smaller than start)

Task: 
Find the minimum number of jumps to go from start to finish

Example: 
Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)
*/

/*
P - Two arguments as integers. Always (+). Second argument will always be larger than the first.
R - Integer representing the minimum number of steps (i + 1 || i + 3) it will require to get from start to finish.
E - solution(1, 5)    // 2
P - 
function solution(start, finish) {
  // Subtract start from finish.
  // Divide the number of required steps by 3 and round down.
  // Add the remaining steps to get the total count.
  // Return integer.
}
*/

function solution(start, finish) {
  let steps = finish - start;
  return Math.floor(steps / 3) + steps % 3;
}

// Test: 
// console.log(solution(1, 5))
// console.log(solution(2, 4))
