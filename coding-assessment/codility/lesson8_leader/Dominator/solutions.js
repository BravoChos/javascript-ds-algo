// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

//Detected time complexity: O(N*log(N)) or O(N)
function solution(A) {
  const arr = [];
  for (let i = 0; i < A.length; i++) {
    if (!arr[A[i]]) arr[A[i]] = 1;
    else arr[A[i]]++;
    if (arr[A[i]] > A.length / 2) return i;
  }
  return -1;
}

console.log(solution([3, 4, 3, 2, -1, 3, 3])); // [0,2,4,6,7]
