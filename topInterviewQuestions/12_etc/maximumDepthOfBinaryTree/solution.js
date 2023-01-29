// DFS (Recursion):
var maxDepth = function (root) {
  if (!root) return null;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
};

// BFS (Level Order):
var maxDepth = function (root) {
  if (!root) return 0;
  // using BFS and counting levels
  // not recommended to use array as queue
  let levels = 0,
    queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let count = queue.length;

    for (let i = 0; i < count; i++) {
      const node = queue.shift();
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
    levels++;
  }
  return levels;
};

var maxDepth3 = function (root) {
  if (root === null) return 0;
  var result = 0;
  function dfs(node, depth) {
    if (node.left !== null) {
      dfs(node.left, depth + 1);
    }
    if (node.right !== null) {
      dfs(node.right, depth + 1);
    } else result = Math.max(result, depth);
  }
  dfs(root, 1);
  return result;
};
