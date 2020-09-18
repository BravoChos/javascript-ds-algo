// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let sum = 0;
  let result = 0;
  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] === 1) {
      sum++;
    } else {
      result += sum;
    }
    if (result > 1000000000) {
      result = -1;
      break;
    }
  }
  return result;
}

console.log(solution([0, 1, 0, 1, 1]));
console.log(solution([0]));
console.log(solution([1]));
console.log(solution([0, 1]));
console.log(solution([1, 0]));
console.log(solution([1, 1]));
console.log(solution([0, 0]));
