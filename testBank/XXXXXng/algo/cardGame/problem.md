**11. Card Game (Easy)**

**Rules**
There are N cards. Every time you pick up the card, the following rules are applied.

```
1. Multiply the number written on the card by the number of cards drawn so far.
2. If it is an 2th card, it is multiplied by -1.
```

If the number of cards and its card information, find the maximum possible result you can get accroding to the rules above.

**Example**

```
Example 1
input = ["3", "1 2 3"]
output = 9
explanation: (2 * 1) - (1 * 2) + (3 * 3) = 9
```

```
Example 2
input = ["5", "1 3 5 7 9"]
output = 61
explanation: (5 * 1) - (3 * 2) + (7 * 3) - (1 * 4) + (9 * 5) = 61
```

**Constraints:**

```
-  1 <= N <= 10 (N is the number of cards)
-  1 <= M <= 100 (M is the possible number of the card)
```
