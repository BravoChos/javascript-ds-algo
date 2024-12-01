// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let unparied = {};
  let length = A.length;

  if (length === 1) return A[0];
  A.forEach((element, index) => {
    if (unparied[element]) {
      unparied[element].push(index);
    } else {
      unparied[element] = [index];
    }
  });
  let result = Object.keys(unparied).find(
    (integer, index) => unparied[integer].length === 1
  );
  // time complexity O(n^2)
  return Number(result);
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
console.log(solution([42]));
// 999,999
