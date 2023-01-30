class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values) {
    const length = values.length;
    if (length) this.value = values[0];
    else return null;
    let i = 1;
    const queue = [this];

    while (queue.length) {
      let current = queue.shift();
      for (let side of ["left", "right"]) {
        if (!current[side] && values[i]) {
          current[side] = new TreeNode(values[i]);
        }
        i++;
        if (current[side]) queue.push(current[side]);
      }
    }
    return this;
  }
}

const root = new TreeNode();
const root2 = new TreeNode();
const root3 = new TreeNode();
root.insert([1, 1, 1, 1, null, null, null, 1, null, null, null, 1, null, null]);
root2.insert([3, 9, 20, null, null, 15, 7]);
root3.insert([1, null, 2]);

// ------- Code to generate our binary tree -------
var maxDepth = function (node) {
  let currentDepth = 0;
  if (!node) {
    return currentDepth;
  }

  let q = [node];
  while (q.length) {
    for (let i = 0; i < q.length; i++) {
      let current = q.shift();
      if (current.right) q.push(current.right);
      if (current.left) q.push(current.left);
    }
    currentDepth++;
  }

  return currentDepth;
};

console.log(maxDepth(root, 0)); //4
console.log(maxDepth(root2, 0)); //3
console.log(maxDepth(root3, 0)); //2
