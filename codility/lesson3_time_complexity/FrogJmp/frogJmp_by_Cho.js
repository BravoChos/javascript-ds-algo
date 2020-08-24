// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (Y === X) return 0;
  if (D > Y - X) return 1;

  let quotient = parseInt((Y - X) / D);
  let remainder = (Y - X) % D;
  
  if (remainder) {
    return quotient + 1;
  } else {
    return quotient;
  }
}

console.log(solution(10, 85, 30)); // [9, 7, 6, 3, 8]
