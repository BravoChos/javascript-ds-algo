// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  if (A.length === 0) return [];
  if (A.length === 1) return [];
  A.sort();
  for (let i = 0; i < A.length; i++) {
    if (i + 1 !== A[i]) {
      return i + 1;
    }
  }
}
console.log(solution([2, 3, 1, 5])); //4
console.log(solution([])); //4