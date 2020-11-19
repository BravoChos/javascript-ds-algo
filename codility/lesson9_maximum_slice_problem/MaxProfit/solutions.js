// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  if (A.length === 1 || A.length === 0) return 0;

  let minPrice = A[0];
  let localMaxProfit = 0;
  let globalMaxProfit = 0;

  for (let i = 1; i < A.length; i++) {
    localMaxProfit = A[i] - minPrice;
    if (A[i] < minPrice) minPrice = A[i];

    globalMaxProfit = Math.max(localMaxProfit, globalMaxProfit);
  }

  if (globalMaxProfit < 0) return 0; //이익을 보는 경우가 없이, 손해만 나는 경우

  return globalMaxProfit;
}

console.log(solution([23171, 21011, 21123, 21366, 21013, 21367]));
