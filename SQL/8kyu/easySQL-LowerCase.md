# Easy SQL: LowerCase

## Task
Given a demographics table in the following format:

** demographics table schema **
id
name
birthday
race

you need to return the same table where all letters are lowercase in the race column.


## Solution
Select all values from 'demographics table'.
Apply LOWER function to 'race' column.
Return all entries including the modified column.


SELECT
  id,
  name,
  birthday,
  LOWER(race) AS race
FROM demographics;
