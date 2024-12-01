/*
NOTE: The beginning portion builds our test case binary tree. Scroll down to the section titled Our Solution for the code solution!
 */

// ------- Code to generate our binary tree -------
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values) {
    const queue = [this];
    let i = 0;

    if (!this.value) {
      this.value = values[i];
      i++;
    }

    while (queue.length > 0) {
      let current = queue.shift();
      for (let side of ["left", "right"]) {
        if (!current[side] && values[i]) {
          current[side] = new TreeNode(values[i]);
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

// ------- Our Solution -------

const getTreeHeight = function (root) {
  let height = 0;

  while (root.left !== null) {
    height++;
    root = root.left;
  }

  return height;
};

const nodeExists = function (idxToFind, height, node) {
  let left = 0,
    right = Math.pow(2, height) - 1,
    count = 0;

  while (count < height) {
    const midOfNode = Math.ceil((left + right) / 2);

    if (idxToFind >= midOfNode) {
      node = node.right;
      left = midOfNode;
    } else {
      node = node.left;
      right = midOfNode - 1;
    }

    count++;
  }

  return node !== null;
};

const countNodes = function (root) {
  if (!root.value) return 0;
  const height = getTreeHeight(root);

  if (height === 0) return 1;

  const upperCount = Math.pow(2, height) - 1;

  let left = 0,
    right = upperCount;

  while (left < right) {
    const idxToFind = Math.ceil((left + right) / 2);

    if (nodeExists(idxToFind, height, root)) {
      left = idxToFind;
    } else {
      right = idxToFind - 1;
    }
  }

  return upperCount + left + 1;
};

const tree = new TreeNode();
tree.insert([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null]);
console.log(countNodes(tree));

const tree2 = new TreeNode();
tree2.insert([1, 2, 3, 4, 5, 6]);
console.log(countNodes(tree2)); // 6

const tree3 = new TreeNode();
tree3.insert([]);
console.log(countNodes(tree3)); // 0

const tree4 = new TreeNode();
tree4.insert([1]);
console.log(countNodes(tree4)); // 1
