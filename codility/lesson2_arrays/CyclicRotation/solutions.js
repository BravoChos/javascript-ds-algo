// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  // if A is meant to be shifted by its own length (K) then just return the array
  if (A.length === K || K === 0) {
    return A;
  }

  // Run K number of times saving last element in the array as a temporary variable, adding it to the front of the array and removing the last element
  for (let i = 0; i < K; i++) {
    let lastElement = A[A.length - 1];
    A.unshift(lastElement);
    A.pop();
  }
  return A;
}

console.log(solution([3, 8, 9, 7, 6], 3)); // [9, 7, 6, 3, 8]
console.log(solution([5, -1000], 1)); // [-1000, 5]
console.log(solution([2, 3, 4, 5, 6, 7, 1], 3)); // [6, 7, 1, 2, 3, 4, 5]
console.log(solution([], 1)); // []
console.log(solution([1, 1, 2, 3, 5], 42)); // [3, 5, 1, 1, 2]
console.log(solution([1, 2, 3, 4, 5, 6, 7], 2)); //[6, 7, 1, 2, 3, 4, 5]
console.log(solution([-1, -2, -3, -4, -5, -6], 10)); // [-3, -4, -5, -6, -1, -2]
