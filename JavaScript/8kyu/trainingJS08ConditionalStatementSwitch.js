/* Training JS #8: Conditional Statement - Switch */

/*
In JavaScript, switch can replace multiple if statements.

switch(n){
  case 1:  
    //code block
    break;
  case 2:
    //code block
    break;
  case ...:
    //code block
    break;

  default:       //default is optional, sometimes it can be omitted
    //code block
                 //The last one does not need break
}
switch is the keyword and n is the variable to switch. case 1 means when n===1. Following the ":" you can add your code for what to do in that case. The keyword break is used as termination - if you forget break, the code will continue running through the other case statements and default until a break appears. If no case statements match, default is entered.

In some instances, the switch statement is clearer than the if..else statement.

For example, we can write a function to calculate what day today is, like this:

function whatDayIsToday(n){
  // getDay() is a method of Date() - we will learn this later
  var day=new Date().getDay(),x; 
  switch (day){
    case 0:
      x="Today it's Sunday";
      break;
    case 1:
      x="Today it's Monday";
      break;
    case 2:
      x="Today it's Tuesday";
      break;
    case 3:
      x="Today it's Wednesday";
      break;
    case 4:
      x="Today it's Thursday";
      break;
    case 5:
      x="Today it's Friday";
      break;
    case 6:
      x="Today it's Saturday";
      break;
  }
  return x;
}
Task: 
Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+

Tip: Using default for most of the cases can reduce your work.
*/

/*
P - One argument as an integer.
R - Integer representing the number of days in the given calendar month.
E - 
howManydays(1)    // 31
howManydays(2)    // 28
howManydays(4)    // 30
P - 
function howManydays(month) {
  // Create a variable to store the amount of days and set to null.
  // Create a switch case which takes in the given calendar month
  // Assign the number of days within the month to the created variable.
  // Return integer.
}
*/

function howManydays(month) {
  let days = null;
  switch(month) {
    case 2: days = 28; break;
    case 4: 
    case 6: 
    case 9: 
    case 11: days = 30; break;
    default: days = 31; break;
  }

  return days;
}

// Test: 
// console.log(howManydays(1))
// console.log(howManydays(2))
// console.log(howManydays(3))
// console.log(howManydays(4))
// console.log(howManydays(12))