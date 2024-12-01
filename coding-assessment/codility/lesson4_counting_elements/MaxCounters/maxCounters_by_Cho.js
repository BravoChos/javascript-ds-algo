// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// time complexity O(N*M)
// performance medium
function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = new Array(N).fill(0);
  let maxNumber = N + 1;
  let maxCount = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === maxNumber) {
      // this part can be extremely inefficient!!! 
      result = result.map((item) => maxCount);
    } else {
      result[A[i] - 1]++;
      maxCount = maxCount > result[A[i] - 1] ? maxCount : result[A[i] - 1];
    }
  }

  return result;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
