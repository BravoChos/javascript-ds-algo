// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// fail. T-T.....
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let startingIndex = 0;

  let prevMinAvg;
  let nextMinAvg;
  for (var i = 1; i < A.length; i++) {
    // number of..
    n = i - startingIndex + 1;

    if (i === 1) {
      prevMinAvg = (A[i - 1] + A[i]) / 2;
    } else {
      nextMinAvg = ((n - 1) * prevMinAvg + A[i]) / n;
      newMinAvg = (A[i - 1] + A[i]) / 2;

      if (prevMinAvg < nextMinAvg && prevMinAvg < newMinAvg) {
      }
    }
  }
  return startingIndex;
}

console.log(solution([4, 2, 2, 5, 1, 5, 8]));

// [1,2,3,4]
