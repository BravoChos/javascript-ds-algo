// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// Detected time complexity:O(N)

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length === 1) {
    return 0;
  }
  if (A.length > 100000) {
    return -1;
  }

  let zeroCount = 0;
  let oneCount = 0;
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      zeroCount += 1;
    }

    if (A[i] === 1) {
      result += zeroCount;
      oneCount += 1;
    }

    if (result > 1000000000) {
      return -1;
    }
  }

  if ((zeroCount === 0 && oneCount > 0) || (zeroCount > 0 && oneCount === 0)) {
    return 0;
  } else {
    return result;
  }
}

console.log(solution([0, 1, 0, 1, 1]));
console.log(solution([0]));
console.log(solution([1]));
console.log(solution([0, 1]));
console.log(solution([1, 0]));
console.log(solution([1, 1]));
console.log(solution([0, 0]));
