/* Triple Trouble */

/*
Write a function
> tripledouble(num1,num2)

which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples: 
> tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

> tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

> tripledouble(12345, 12345) == 0

> tripledouble(666789, 12345667) == 1
*/

/*
P - Two arguments as integers.
R - Integer 1 if num1 contains 3 repeating numbers and num2 contains 2 repeating numbers, or 0 if they do not.
E - 
tripledouble(451999277, 41177722899)  // 1
tripledouble(1222345, 12345)          // 0
tripledouble(12345, 12345)            // 0
tripledouble(666789, 12345667)        // 1
P - 
function tripledouble(num1, num2) {
  // Create variables that store the given integers as strings.
  // Iterate from 0 - 9.
  // Create a variable to store the current iteration as a triple repeating string, "iii".
  // Create a variable to store the current iteration as a double repeating string, "ii".
  // If the first given integer contains the triple string and the second given integer contains the double string, return 1.
  // Else, return 0.
}
*/

function tripledouble(num1, num2) {
  const str1 = String(num1);
  const str2 = String(num2);

  for (let i = 0; i < 10; i++) {
    let tripleNum = String(i).repeat(3);
    let doubleNum = String(i).repeat(2);

    if (str1.includes(tripleNum) && str2.includes(doubleNum)) {
      return 1;
    }
  }

  return 0;
}

// Alternate solution: 
// function tripledouble(num1, num2) {
//   for (let i = 0; i < 10; i++) {
//     const reg1 = new RegExp(`${i}{3}`);
//     const reg2 = new RegExp(`${i}{2}`);

//     if (reg1.test(num1) && reg2.test(num2)) {
//       return 1;
//     }
//   }

//   return 0;
// }

// Test: 
// console.log(tripledouble(451999277,41177722899))
// console.log(tripledouble(1222345, 12345))
// console.log(tripledouble(12345, 12345))
// console.log(tripledouble(666789, 12345667))
// console.log(tripledouble(10560002, 100))
// console.log(tripledouble(1112, 122))
