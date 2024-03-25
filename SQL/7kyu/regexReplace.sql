/*
# Regex Replace

## Task
You are given a table named repositories, format as below:
** repositories table schema **
project
commits
contributors
address

The table shows project names of major cryptocurrencies, their numbers of commits and contributors and also a random donation address ( not linked in any way :) ).

Your job is to remove all numbers in the address column and replace with '!', then return a table in the following format:
** output table schema **
project
commits
contributors
address

Case should be maintained.


## Solution
Select projects, commits, and contributors from the 'repositories' table.
Apply REGEXP_REPLACE function to address to replace all numbers with '!'.
Alias the modified column as 'address'.
Return projects, commits, contributors, and address.
*/

SELECT 
  project,
  commits,
  contributors,
  REGEXP_REPLACE(address, '[0-9]', '!', 'g') AS address
FROM repositories;
