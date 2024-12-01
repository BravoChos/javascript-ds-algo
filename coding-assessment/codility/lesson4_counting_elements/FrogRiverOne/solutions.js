// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  const map = {};
  let sum = (X * (X + 1)) / 2;
  for (let i = 0; i < A.length; i++) {
    if (X >= A[i] && !map[A[i]]) {
      sum -= A[i];
      map[A[i]] = A[i];
    }
    if (sum === 0) return i;
  }
  return -1;
}
