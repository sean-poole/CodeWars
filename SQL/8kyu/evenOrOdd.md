# Even or Odd

## Task
You will be given a table numbers, with one column number.

Return a dataset with two columns: number and is_even, where number contains the original input value, and is_even containing "Even" or "Odd" depending on number column values.

Numbers table schema
* number INT

Output table schema
* number  INT
* is_even STRING


## Solution
Select 'number' from 'numbers' table.
Evaluate if the number has a remainder when divided by 2.
If the remainder = 0, set value as 'Even'.
Else, set value as 'Odd'.
Store values in column 'is_even'.

SELECT
  number,
  CASE WHEN number % 2 = 0 
    THEN 'Even'
    ELSE 'Odd'
  END AS is_even
FROM numbers;
