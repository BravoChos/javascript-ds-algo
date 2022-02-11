# Perfect String

A string that includes all alphabets is called a 'perfect string'.

For instance, a sentence "His comments came after Pyongyang announced it had a plan to fire four missiles near the US territory of Guam." is not a perfect string because it does not include b, j, k, q, v, w, x, and z. On the other hand, "Jackdaws love my big sphinx of quartz" is 'perfect string' because it includes every alphabet.

When the string sentence is given as a parameter, complete the solution function to return the alphabet characters needed to create a 'perfect string'.

## Constraints

- The length of sentence is less than or eqaual to 5,000.
- The sentence consists of alphabets, spaces, and special characters (ASCII code).
- Sort the alphabet lowercase letters needed for the sentence to become a perfect string in ascending order, and combine them back into a single string.
- If the sentence is a perfect string, return "perfect".

## Examples

| sentence                                                                                                         | result     |
| ---------------------------------------------------------------------------------------------------------------- | ---------- |
| "His comments came after Pyongyang announced it had a plan to fire four missiles near the US territory of Guam." | "bjkqvwxz" |
| "Jackdaws love my big sphinx of quartz"                                                                          | "perfect"  |

Example #1

In the sentence "His comments came after Pyongyang announced it had a plan to fire four missiles near the US territory of Guam.", there are missing alphabet characters b, j, k, q, v, w, x, and z.
