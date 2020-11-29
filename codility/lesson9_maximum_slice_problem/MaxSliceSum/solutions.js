// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let sum = 0;
  let max = A[0];
  let maxCell = A[0];
  for (a of A) {
    sum = Math.max(0, sum + a);
    max = Math.max(max, sum);
    maxCell = Math.max(maxCell, a);
  }
  if (max == 0) return maxCell;
  return max;
}

console.log(solution([3, 2, -6, 4, 0]));
