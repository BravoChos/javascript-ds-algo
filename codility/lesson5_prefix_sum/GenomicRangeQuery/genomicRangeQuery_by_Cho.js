// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Detected time complexity: O(B-A)
function solution(A, B, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let count = 0;
  for (let i = A; i < B + 1; i++) {
    if (i % K === 0) {
      count++;
    }
  }
  return count;
}

console.log(solution(6, 11, 2));
