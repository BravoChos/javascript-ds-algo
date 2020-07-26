function solution(numbers, target) {
  var answer = 0;
  // 처음 시작은 개수 0개, 합계 0 으로 시작하면서 모든 경우를 dfs로 탐색
  recur(0, 0);
  return answer;

  function recur(count, sum) {
    // leaf node 도착했을 때, 모든 numbers 탐색
    if (count === numbers.length) {
      // 주어진 조건에 만족하면 answer++
      if (sum === target) {
        answer++;
      }
      // 리턴해주어야함
      return;
    }

    // left child 는 +일 경우
    recur(count + 1, sum + numbers[count]);
    // right child 는 -일 경우
    recur(count + 1, sum - numbers[count]);
  }
}
console.log(solution([1, 1, 1, 1, 1], 3));

function bestSolution(numbers, target) {
  var answer = 0;
  var answer = 0;

  let root = new BinarySearchTree();
  root.insert(0);
  numbers.forEach(function (val) {
    root.insert(val);
  });

  answer = root.DFSPreOrder(target);
  return answer;
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        if (node.left === null) {
          let leftNode = new Node(-value);
          let rightNode = new Node(value);
          node.left = leftNode;
          node.right = rightNode;
        }
      }
      traverse(current);
      return this;
    }
  }
  DFSPreOrder(target) {
    let count = 0;
    let data = 0;
    let current = this.root;
    function traverse(node) {
      data = data + node.value;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      if (node.left === null) {
        if (data === target) {
          count++;
        }
      }
      data = data - node.value;
    }
    traverse(current);
    return count;
  }
}
console.log(bestSolution([1, 1, 1, 1, 1], 3));
