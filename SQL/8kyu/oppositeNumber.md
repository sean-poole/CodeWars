# Opposite Number

## Task
Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:
1: -1
14: -14
-34: 34

You will be given a table: opposite, with a column: number. Return a table with a column: res.


## Solution
Select number from 'opposite' table.
Multiply number by -1 to calculate its inverse value.
Store new value in column 'res'.
Return 'res'.

SELECT (number * -1) AS res
FROM opposite;
