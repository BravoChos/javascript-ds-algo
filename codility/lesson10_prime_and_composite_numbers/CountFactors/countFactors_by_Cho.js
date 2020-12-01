// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Detected time complexity: O(sqrt(N))
function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)

  let i = 1;
  let result = 0;

  while (i * i < N) {
    if (N % i === 0) {
      result += 2;
    }
    i += 1;
  }
  if (i * i === N) result += 1;

  return result;
}
