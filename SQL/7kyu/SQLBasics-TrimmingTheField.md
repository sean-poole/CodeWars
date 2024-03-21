# SQL Basics: Trimming the Field

## Tasks
You have access to a table of monsters as follows:
monsters schema
id
name
legs
arms
characteristics

The monsters in the provided table have too many characteristics, they really only need one each. Your job is to trim the characteristics down so that each monster only has one. If there is only one already, provide that. If there are multiple, provide only the first one (don't leave any commas in there).

You must return a table with the format as follows:
output schema
id
name
characteristic

Order by id


## Solution
Select id, name, and characteristics columns from the 'monsters' table.
Return only the first value within the characteristics column.
Order the returned rows by id.

SELECT 
  id,
  name,
  split_part(characteristics, ',', 1) AS characteristic
FROM monsters
ORDER BY id;
