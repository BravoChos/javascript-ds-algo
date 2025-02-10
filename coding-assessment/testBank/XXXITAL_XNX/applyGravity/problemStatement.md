# Apply Gravity
You are given a rectangular matrix of characters matrix, which represents a 2-dimensional field where each cell contains the following types of cells:

'-' represents an empty cell,

'#' represents an obstacle,

'F' corresponds to a cell of a connected figure.

It is guaranteed that the connected figure exists and its cells, denoted by ('F'), are connected horizontally and/or vertically.

Gravity makes the figure fall toward the bottom of the field, until one of its cells reaches the ground (bottom edge of the matrix), or meets an obstacle. Your task is to return the state of the field after the figure stops falling.

Note: You are not expected to provide the most optimal solution, but a solution with time complexity not worse than
O(matrix.length² · matrix[0].length²) will fit within the execution time limit.

# Example
For

```
matrix = [['F', 'F', 'F'],
          ['-', 'F', '-'],
          ['-', 'F', 'F'],
          ['#', 'F', '-'],
          ['F', 'F', '-'],
          ['-', '-', '-'],
          ['-', '-', '#'],
          ['-', '-', '-']]
```


the output should be