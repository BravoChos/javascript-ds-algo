# Calculator

Have the function "calculator(**str**)" take the **str** parameter being passed and evelate the mathematical expression within in. For example, if str were "2+(3-1)_3" the output should be 8. Another example if **str** were "(2-0)(6/2)" the output should be 6. There can be parenthesis within the string so you must evalutate it properly according to the rules of arithmetic. the string will contain the operators: +,-,/,_,(,and). If you have a string like this: #/#\*# or #+#(#)/#, then evalute from left to right. So divide then multiply, and for the second one multiply, divide, then add. The evaluations will be such that there will not be any decimal operations, so you do not need to account for rounding and whatnot.

## Examples

```
Input: "6*(4/2)+ 3*1"
Ouput: 15
```

```
Input: "6/3-1"
Ouput: 1
```
