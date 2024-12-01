// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const resultA = Math.ceil(A / K);
  const resultB = Math.ceil((B + 1) / K);
  result = resultB - resultA;
  return result;
}

// - resultA : round up (A / K)
// - resultB : round up (B+1) / K

console.log(solution(1, 5, 2));
console.log(solution(0, 5, 2));
console.log(solution(6, 11, 2));
console.log(solution(10, 10, 7)); //0
