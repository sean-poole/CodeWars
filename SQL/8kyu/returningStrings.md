# Returning Strings

## Task
Write a select statement that takes name from person table and return "Hello, <name> how are you doing today?" results in a column named greeting

--person table has name data


## Solution
Get 'name' from 'person' table.
Apply CONCAT function to 'name'. Format a string as "Hello, <name> how are you doing today?".
Store formatted string as 'greeting'.
Return 'greeting'.

SELECT
  CONCAT('Hello, ', name, ' how are you doing today?') AS greeting
FROM person
