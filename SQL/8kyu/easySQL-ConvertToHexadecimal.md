# Easy SQL: Convert to Hexadecimal

## Task
You have access to a table of monsters as follows:
monsters table schema
id
name
legs
arms
characteristics

Your task is to turn the numeric columns (arms, legs) into equivalent hexadecimal values.
output table schema
legs
arms


## Solution
Select 'legs' and 'arms' columns from 'monsters' table.
Apply TO_HEX function to the returned columns.
Return the modified columns 'legs' and 'arms'.

SELECT
  TO_HEX(legs) as legs,
  TO_HEX(arms) as arms
FROM monsters;
