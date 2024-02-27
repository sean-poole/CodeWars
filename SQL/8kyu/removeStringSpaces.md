# Write a function that removes the spaces from the string, then return the resultant string.

# Examples:
# Input -> Output
# "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
# "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
# "8aaaaa dddd r     " -> "8aaaaaddddr"

# -- you are given a table 'nospace' with column 'x', return a table with column 'x' and your result in a column named 'res'.



## Get 'x' from 'nospace' table.
## Apply REPLACE function to 'x'. Replace all spaces with empty character ''.
## Store modified value in column 'res'.

SELECT 
  x,
  REPLACE(x, ' ', '') as res
FROM nospace
