# Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

# -- you are given a table 'booltoword' with column 'bool', return a table with column 'bool' and your result in a column named 'res'.



## Get 'bool' from 'booltoword' table.
## Evaluate if the returned boolean value.
## If the value = True, set value as 'Yes'.
## Else, set value as 'No'.
## Store values in column 'res'.

SELECT 
  bool,
  CASE WHEN bool = 'True'
    THEN 'Yes'
    ELSE 'No'
  END AS res
FROM booltoword;
