// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const sortA = A;
  const N = A.length;
  let left, right, triplet;

  sortA.sort(function (a, b) {
    return a - b;
  });

  if (sortA[N - 1] <= 0) {
    triplet = sortA[N - 3] * sortA[N - 2] * sortA[N - 1];
  } else {
    left = sortA[0] * sortA[1] * sortA[N - 1];
    right = sortA[N - 3] * sortA[N - 2] * sortA[N - 1];
    if (left > right) {
      triplet = left;
    } else {
      triplet = right;
    }
  }

  return triplet;
}
