// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
//Detected time complexity:  O(N*log(N)) or O(N)
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let set = {};
  let distinct = 0;
  for (let i = 0; i < A.length; i++) {
    if (set[A[i]]) {
    } else {
      set[A[i]] = true;
      distinct++;
    }
  }
  return distinct;
}

console.log(solution([1, 2, 3, 2, 1, 3]));
