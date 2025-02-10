# Reconstruct Sequence
A group of intrepid adventurers is on a quest decode a mysterious artifact that has a series of unique symbols etched along its circular edge. The order of these symbols has long been lost, but collection of symbol pairs known to be adjacent to each other was found. Unfortunately, the pairs of symbols became jumbled over time, meaning each pair `(x,y)` could be recorded either as `(x,y)` or `(y,x)`. You are given ad array symbolPairs representing these shuffled pairs, and your task is to rediscover the original sequence of symbols on the artifact's circular edge.

Remember that any cyclic rotation of the sequence can be considered a correct solution, and the order of the sequence can be reversed as well because the circle has no fixed start or end. Please return any of the valid arrangements.

## Examples


- For symbolPairs = [[3,5], [1,4], [2,4], [1,5], [2,3]], the output can be solution(symbolPairs) = [3,5,1,4,2]
