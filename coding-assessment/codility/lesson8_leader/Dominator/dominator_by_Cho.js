// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let dominator = {};
  for (let i = 0; i < A.length; i++) {
    if (dominator[A[i]]) {
      dominator[A[i]].count++;
      dominator[A[i]].result.push(i);
    } else {
      dominator[A[i]] = {
        count: 1,
        result: [i],
      };
    }
  }

  let result = [];
  let countMaxNumberOfElement = 0;
  let twoDominators = false;
  // not supported in Node 8.X version
  Object.keys(dominator).forEach((item) => {
    if (dominator[item].count > countMaxNumberOfElement) {
      countMaxNumberOfElement = dominator[item].count;
      result = dominator[item].result;
      twoDominators = false;
    } else if (dominator[item].count === countMaxNumberOfElement) {
      twoDominators = true;
    }
  });
  if (twoDominators) return -1;
  return result;
}
console.log(solution([3, 4, 3, 2, -1, -1, 2])); // [0,2,4,6, 7]
