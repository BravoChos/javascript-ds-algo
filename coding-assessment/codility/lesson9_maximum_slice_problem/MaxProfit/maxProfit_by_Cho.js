// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// 77%
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const length = A.length;
  if (length < 2) return 0;
  let min_bought_price = A[0];
  let max_sell_price = A[length - 1];
  for (let i = 1, j = length - 2; i <= j; i++, j--) {
    min_bought_price = Math.min(min_bought_price, A[i]);
    max_sell_price = Math.max(max_sell_price, A[j]);
  }
  if (max_sell_price <= min_bought_price) return 0;
  return max_sell_price - min_bought_price;
}
console.log(solution([23171, 21011, 21123, 21366, 21013, 21367]));
console.log(solution([]));
console.log(solution([4, 3, 2, 1, 2, 3, 4])); //3
