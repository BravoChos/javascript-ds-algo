// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// https://miiingo.tistory.com/326
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const N = A.length;
  let array = new Array();
  let intersect = 0;

  for (let i = 0; i < N; i++) {
    let circle = {
      left: i - A[i],
      right: i + A[i],
    };
    array.push(circle);
  }
  array.sort((a, b) => a.left - b.left);

  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (intersect > 10000000) {
        return -1;
      }
      if (array[j].left > array[i].right) {
        break;
      }
      if (array[j].left >= array[i].left && array[j].left <= array[i].right) {
        intersect++;
      }
    }
  }

  return intersect;
}
