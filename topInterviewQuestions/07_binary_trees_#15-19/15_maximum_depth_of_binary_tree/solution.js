/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
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

const root = new TreeNode();
// root.insert([1, 1, 1, 1, null, null, null, 1, null, null, null, 1, null, null]);
root.insert([3,9,20,null,null,15,7])
// console.log({ root });
// ------- Code to generate our binary tree -------

// ------- Our Solution -------
var maxDepth = function (node, currentDepth) {
  if (!node) {
    return currentDepth;
  }

  currentDepth++;

  return Math.max(
    maxDepth(node.right, currentDepth),
    maxDepth(node.left, currentDepth)
  );
};

console.log(maxDepth(root, 0));
