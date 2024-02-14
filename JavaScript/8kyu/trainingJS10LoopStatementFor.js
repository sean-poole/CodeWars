/* Training JS #10: Loop Statement - For */

/*
The for loop is a very frequently used loop in JS.

Recall in lesson 9 we wrote a while loop:
function sum1_100(){
  var sum=0,num=1
  while (num<=100){
    sum+=num;
    num++;
  }
  return sum;
}

We can rewrite it using a for loop, like this:
function sum1_100(){
  for (var sum=0,num=1;num<=100;num++){
    sum+=num;
  }
  return sum;
}

As you see, there are three parts in the parentheses, separated by ";". The first part, var sum=0,num=1, is the initialization. This part will run before the loop starts. The second part, num<=100 is the conditional expression. The conditional expression is checked before the start of each time through the loop. When the value of the expression is false, the loop will be terminated. The third part, num++ will run after the code block, and is usually used for increasing and decreasing variables.

For the example above, the running order of the code is:

                              <--- back to part 2
                  -------------------------------------------
                  |                 true                    |
var sum=0,num=1  --->  num<=100 ?  ------> code block---> num++
                                |  
                           false|
                       loop terminated
When you need to traverse an array, you can use the for loop to access each element using its index. Here's an example:

function displayElements(array){
  for (var i=0;i<array.length;i++){
    console.log(array[i]);
  }
}

This function will display every element of the array on your screen.
Ok, lesson is over, let's do a task with for.

Task: 
The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.
*/

/*
P - One argument as an array of integers.
R - One array with subarrays representing the odd and even numbers in the given array.
E - 
pickIt([1, 2])        // [[1], [2]]
pickIt([1, 2, 3])     // [[1, 3], [2]]
pickIt([10, 20, 30])  // [[], [10, 20, 30]]
P - 
function pickIt(arr) {
  // Iterate through the given array of integers.
  // If the current element is odd, push to the odd array.
  // Else, push to the even array.
  // Return array of odd and even subarrays.
}
*/

function pickIt(arr) {
  const odd = [];
  const even = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 ? odd.push(arr[i]) : even.push(arr[i]);
  }

  return [odd, even];
}

// Test: 
// console.log(pickIt([1, 2]))
// console.log(pickIt([1, 2, 3]))
// console.log(pickIt([3, 2, 1]))
// console.log(pickIt([10, 20, 30]))
// console.log(pickIt([11, 21, 31]))
// console.log(pickIt([8, 1, 5, 4, 6, 1, 1]))
