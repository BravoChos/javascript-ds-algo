# Binary Converter

Suppose that the number of 1s after converting a natural number `n` into a binary number is k. Write a function `solution` to return among the numbers under `n`, how many the numbers have k 1s when converted into a binary number.

## Constraints

- `n` is natural number 1 <= n <= 2^30

## Examples

| n   | result |
| --- | ------ |
| 9   |
| 3   |

Example #1

When `n`=9, there are two 1s when converting it into a binary number, 1001. Among the natural numbers under 9, the numbers which has two 1s when converting into a binary number are as follows.

- When converting 3 into a binary number, it is 11(2).
- When converting 3 into a binary number, it is 101(2).
- When converting 3 into a binary number, it is 110(2).

Return 3 because there are 3 numbers.
