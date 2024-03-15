# SQL Basics: Mod

## Task
Given the following table 'decimals':

** decimals table schema **
id
number1
number2

Return a table with one column (mod) which is the output of number1 modulus number2.


## Solution
Get the values from the 'number1' and 'number2' columns from 'decimals' table.
Apply MOD function to 'number1' and 'number2' columns respectively.
Store the calculated remainder as 'mod'.
Return 'mod' column.

SELECT MOD(number1, number2) AS mod
FROM decimals;
