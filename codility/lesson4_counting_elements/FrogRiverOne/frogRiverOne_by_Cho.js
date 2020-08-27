// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let count = X;
  let checkBox = {};
  for (let i = 0; i < A.length; i++) {
    if (A[i] <= X) {
      if (checkBox[A[i]]) {
      } else {
        checkBox[A[i]] = true;
        count--;
      }
    }
    if (count === 0) {
      return i;
    }
  }
  return -1;
}
console.log(solution(5, [4, 1, 2, 3, 6, 5, 7]));
