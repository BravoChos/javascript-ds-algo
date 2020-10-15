// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// Detected time complexity: O(N)
function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let left = [];
  for (let i = 0; i < S.length; i++) {
    // console.log(S[i]);
    if (S[i] === ")") {
      if (left.length === 0) return 0;
      left.pop();
    }
    if (S[i] === "(") left.push("(");
  }
  if (left.length > 0 || right.length > 0) return 0;
  return 1;
}

console.log(solution("(()(())())")); // 1
console.log(solution("())")); // 0
