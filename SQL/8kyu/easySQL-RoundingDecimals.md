# Easy SQL: Rounding Decimals

## Task

Given the following table 'decimals':

** decimals table schema **
id
number1
number2

Return a table with two columns (number1, number2), the value in number1 should be rounded down and the value in number2 should be rounded up.


## Solution
Select 'number1' and 'number2' columns from 'decimals' table.
Apply FLOOR function to 'number1' column.
Apply CEIL function to 'number2' column.
Return both modified columns.

SELECT 
  FLOOR(number1) as number1,
  CEIL(number2) as number2
FROM decimals;
