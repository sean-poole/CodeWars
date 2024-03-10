# Surface Area and Volume of a Box

## Task
Write a function that returns the total surface area and volume of a box as an array: [area, volume]

-- you are given a table 'box' with columns: width (int), height (int), depth (int)
-- return a query with columns: width, height, depth, area (int), volume (int)
-- sort results by area ascending, then volume ascending, then width ascending, then height ascending


## Solution
Select 'width', 'height', and 'depth' from 'box' table.
Calculate area using formula 2lw + 2lh + 2hw. Store result as 'area'.
Calculate volume using formula l * w * h. Store result as 'volume'.
Order columns by area, volume, width, heigth in ascending order.

SELECT 
  width, 
  height, 
  depth,
  ((width * height) * 2) + ((width * depth) * 2) + ((height * depth) * 2) AS area,
  width * height * depth AS volume
FROM box
ORDER BY 
  area, 
  volume, 
  width, 
  height
