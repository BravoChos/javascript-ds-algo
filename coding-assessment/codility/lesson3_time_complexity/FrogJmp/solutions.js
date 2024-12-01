// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
  const minDistance = Y - X;
  return minDistance % D
    ? Math.floor(minDistance / D) + 1
    : Math.floor(minDistance / D);
}

console.log(solution(10, 85, 30)); // [9, 7, 6, 3, 8]
console.log(solution(10, 10, 30)); // [9, 7, 6, 3, 8]
