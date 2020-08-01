1. If you know a solution is not far from the root of the tree:
BFS => because it starts searching the closest nodes to the parent first

2. If the tree is very deep and solutions are rare, 
BFS (DFS will take long time. )
=> dfs will take a really long time with this type of a tree 
because if the tree is really deep it's going to go one by one going really really down below.
And because solutions are rare it's most likely going to just repeat that over and over and over,
although with this one we also have some memory concerns with breath search.

3. If the tree is very wide:
DFS (BFS will need too much memory)
The way breath first search works is that it has to keep track of the nodes and the current level in something called a queue.

4. If solutions are frequent but located deep in the tree
DFS

5. determining whether a path exists between two nodes
DFS

6. Finding the shortest path
BFS