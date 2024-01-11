class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values) {
    const queue = [this];
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift();
      for (let side of ["left", "right"]) {
        if (!current[side]) {
          if (values[i] !== null) {
            current[side] = new TreeNode(values[i]);
          }
          i++;
          if (i >= values.length) return this;
        }
        if (current[side]) queue.push(current[side]);
      }
    }
    return this;
  }
}

// ------- Code to generate our binary tree -------

// ------- Solution -------

const dfs = function (node, min, max) {
  if (node.value <= min || node.value >= max) {
    return false;
  }

  if (node.left) {
    if (!dfs(node.left, min, node.value)) {
      return false;
    }
  }

  if (node.right) {
    if (!dfs(node.right, node.value, max)) {
      return false;
    }
  }

  return true;
};

const isValidBST = function (root) {
  if (!root) return true;
  return dfs(root, -Infinity, Infinity);
};

const tree = new TreeNode(15);
tree.insert([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null]);
console.log(isValidBST(tree)); // false

const tree2 = new TreeNode(15);
tree.insert([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null]);
console.log(isValidBST(tree2)); // true

const tree3 = new TreeNode(2);
tree.insert([1, 3]);
console.log(isValidBST(tree3)); // true

const tree4 = new TreeNode(5);
tree3.insert([1, 4, null, null, 3, 6]);
console.log(isValidBST(tree4)); // true
