// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// Detected time complexity: O(N)
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let min = (A[0] + A[1]) / 2;
  let minIndex = 0;
  for (let i = 1; i < A.length; i++) {
    let lastTwo = (A[i] + A[i + 1]) / 2;
    if (i > A.length - 2) {
      if (lastTwo < min) {
        min = lastTwo;
        minIndex = i;
      }
    } else {
      let lastThree = (A[i] + A[i + 1] + A[i + 2]) / 3;
      if (lastTwo < min || lastThree < min) {
        min = lastTwo < lastThree ? lastTwo : lastThree;
        minIndex = i;
      }
    }
  }
  return minIndex;
}
console.log(solution([4, 2, 2, 5, 1, 5, 8]));
