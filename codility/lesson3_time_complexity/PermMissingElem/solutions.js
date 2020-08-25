// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  var size = A.length;
  var sum = ((size + 1) * (size + 2)) / 2;
  for (i = 0; i < size; i++) {
    sum -= A[i];
  }
  return sum;
}
// Detected time complexity:
// O(N) or O(N * log(N))
