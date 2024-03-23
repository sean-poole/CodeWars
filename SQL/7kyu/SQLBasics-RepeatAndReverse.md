# SQL Basics: Repeat and Reverse

## Task
Using our monsters table with the following schema:
monsters table schema
id
name
legs
arms
characteristics

return the following table:
** output schema**
name
characteristics

Where the name is the original string repeated three times (do not add any spaces), and the characteristics are the original strings in reverse (e.g. 'abc, def, ghi' becomes 'ihg ,fed ,cba').


## Solution
Select name and characteristics from 'monsters' table.
Apply REPEAT function to the returned name column and repeat 3 times with no spaces.
Apply REVERSE function to the returned characteristics column.
Return the modified name and characteristics columns.

SELECT
  REPEAT(name, 3) AS name,
  REVERSE(characteristics) AS characteristics
FROM monsters;
