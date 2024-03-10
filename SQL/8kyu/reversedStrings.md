# Reversed Strings

## Task
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

-- you are given a table 'solution' with column 'str', return a table with column 'str' and your result in a column named 'res'.


## Solution
Select 'str' from 'solution' table.
Apply REVERSE function to 'str'. Store modified value in column 'res'.
Return str and res columns.

SELECT 
  str,
  REVERSE(str) AS res
FROM solution;
