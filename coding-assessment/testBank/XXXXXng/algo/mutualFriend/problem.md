**23. Mutual Friend (Easy)**

**Rules**
Let's write a program to find the two people who are not currently friends, but who have the most friends, given the friendships of the people selected for the test.

For example, a person named P and {A,B,C,D} are friends where as Q and {B,C,D,E} are friends. If so, {B,C,D} are mutual friends.

**Input Format**

1. In the first argument, two natural numbers N and M are given, separated by a space.

- N is number of people, and 2 <= N <= 100
- M is number of relationships, and 1 <= M <= 5,000

2. In the second argument, the names of N people are given, separated by spaces.

3. After that, the names of two people who are friends are given, separated by spaces.

Find the number of mutal friends.

**Output Format**

Example 1

```
input = [
    "7 8",
    "A B C D E P Q",
    "P A",
    "P B",
    "P C",
    "P D",
    "Q B",
    "Q C",
    "Q D",
    "Q E",
]
output = ["P Q", 3]
```

Example 2

```
input = [
   "4 2",
   "RA LW LD JX",
   "LW JX",
   "LD JX"
]
output = ["LD LW", 1]
```
