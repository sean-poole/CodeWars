# Easy SQL: Square Root and Log

## Task
Given the following table 'decimals':

** decimals table schema **
id
number1
number2

Return a table with two columns (root, log) where the values in root are the square root of those provided in number1 and the values in log are changed to a base 10 logarithm from those in number2.

## Solution
Select 'number1' and 'number2' columns from 'decimals' table.
Apply SQRT function to 'number1' column. Set alias as 'root'.
Apply LOG10 function to 'number2' column. Set alias as 'log'.
Return columns 'root' and 'log'.

SELECT
  SQRT(number1) AS root,
  LOG10(number2) AS log
FROM decimals;
