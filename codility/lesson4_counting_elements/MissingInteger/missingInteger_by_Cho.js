// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// 33%
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let smalestMissingInteger = 1;
  A.sort();

  for (var i = 0; i < A.length; i++) {
    if (smalestMissingInteger > A[i]) {
    } else if (smalestMissingInteger === A[i]) {
      smalestMissingInteger++;
    } else if (smalestMissingInteger < A[i]) {
      return smalestMissingInteger++;
    }
  }

  return smalestMissingInteger;
}

console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([1, 2, 3])); // 4
console.log(solution([-1, -3])); // 1
