// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// 75%
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort();
  let len = A.length;
  for (let i = 0; i < len; i++) {
    if (A[i] !== i + 1) {
      return 0;
    }
  }
  return 1;
}

console.log(solution([1]));
console.log(solution([4, 1, 3, 2]));
console.log(solution([4, 1, 2]));
console.log(solution([2, 3, 4]));
