// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let length = A.length;
  let midPointIndex;
  if (length === 0) return [];
  if (K === 1) {
    let lastItem = A.pop();
    A.unshift(lastItem);
    return A;
  }

  if (K > length) {
    midPointIndex = length - (K % length);
    let front = A.slice(0, midPointIndex);
    let back = A.slice(midPointIndex, length);
    return back.concat(front);
  } else if (K === length) {
    return A;
  } else {
    let midPointIndex = length - K;
    let front = A.slice(0, midPointIndex);
    let back = A.slice(midPointIndex, length);
    return back.concat(front);
  }
}

console.log(solution([3, 8, 9, 7, 6], 3)); // [9, 7, 6, 3, 8]
console.log(solution([5, -1000], 1)); // [-1000, 5]
console.log(solution([2, 3, 4, 5, 6, 7, 1], 3)); // [6, 7, 1, 2, 3, 4, 5]
console.log(solution([], 1)); // []
console.log(solution([1, 1, 2, 3, 5], 42)); // [3, 5, 1, 1, 2]
console.log(solution([1, 2, 3, 4, 5, 6, 7], 2)); //[6, 7, 1, 2, 3, 4, 5]
console.log(solution([-1, -2, -3, -4, -5, -6], 10)); // [-3, -4, -5, -6, -1, -2]
