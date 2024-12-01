// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let minDiff;
  let totalSum = 0;
  for (let i = 0; i < A.length; i++) {
    totalSum += A[i];
  }

  for (let i = 0; i < Math.floor(A.length / 2) + 1; i++) {
    if (i === 0) {
      minDiff = Math.abs(totalSum - 2 * A[i]);
    } else if (minDiff > Math.abs(totalSum - 2 * A[i])) {
      minDiff = Math.abs(totalSum - 2 * A[i]);
    }
    totalSum -= 2 * A[i];
  }
  return minDiff;
}
// test scrore rate 62%...(uncomplete)
console.log(solution([3, 1, 2, 4, 3])); //1
