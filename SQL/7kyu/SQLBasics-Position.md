# SQL Basics: Position

## Test
You have access to a table of monsters as follows:
monsters schema
id
name
legs
arms
characteristics

In each row, the characteristic column has a single comma. Your job is to find it using position(). You must return a table with the format as follows:
output schema
id
name
comma

The comma column will contain the position of the comma within the characteristics string. Order the results by comma.


## Solution
Select id and name from the 'monsters' table.
Apply POSITION function to the characteristics column to find the first comma in each row.
Alias the returned value as 'comma'.
Order the columns by comma position.
Return id, name, and comma.

SELECT
  id,
  name,
  POSITION(',' IN characteristics) AS comma
FROM monsters
ORDER BY comma;
