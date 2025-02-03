function findCircularOrder(symbolPairs) {
  if (!symbolPairs || symbolPairs.length === 0) return false;

  const graph = new Map();

  for (const [a, b] of symbolPairs) {
    if (!graph.has(a)) graph.set(a, new Set());
    if (!graph.has(b)) graph.set(b, new Set());
    graph.get(a).add(b);
    graph.get(b).add(a);
  }

  const nodes = Array.from(graph.keys());

  if (nodes.some((node) => graph.get(node).size !== 2)) return false;
  // DFS
  function isConnected(start) {
    const visited = new Set();
    const stack = [start];

    while (stack.length) {
      const node = stack.pop();
      if (!visited.has(node)) {
        visited.add(node);
        for (const neighbor of graph.get(node)) {
          stack.push(neighbor);
        }
      }
    }
    return visited.size === nodes.length;
  }

  if (!isConnected(nodes[0])) return false;

  let sequence = [nodes[0]];
  let current = nodes[0];
  let prev = null;

  // DFS
  while (sequence.length < nodes.length) {
    const [next] = [...graph.get(current)].filter((n) => n !== prev);

    if (!next) return false;
    sequence.push(next);
    prev = current;
    current = next;
  }

  return sequence;
}

// ✅ Success
console.log(
  findCircularOrder([
    [3, 5],
    [1, 4],
    [2, 4],
    [1, 5],
    [2, 3],
  ])
); // [3,5,1,4,2]
console.log(
  findCircularOrder([
    [1, 2],
    [2, 3],
    [3, 1],
    [1, 2],
  ])
);

// ❌ Fail
console.log(
  findCircularOrder([
    [1, 2],
    [2, 3],
    [3, 1],
    [4, 5],
    [5, 6],
  ])
); // false
console.log(findCircularOrder([[1, 2]])); // false
