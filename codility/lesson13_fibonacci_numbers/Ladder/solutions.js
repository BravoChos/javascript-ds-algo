// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)

  const L = A.length;
  const max = Math.pow(2, 30);

  const fibonacci = [0, 1, 2];

  for (let i = 3; i < L + 1; i++) {
    // L까지 피보나치 수열(방법의 수) 구해놓기
    fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % max;
  }

  const result = [];

  for (let i = 0; i < L; i++) {
    // 2^B[i]의 수로 나누기
    result[i] = fibonacci[A[i]] % Math.pow(2, B[i]);
  }

  return result;
}
