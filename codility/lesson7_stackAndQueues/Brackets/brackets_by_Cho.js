// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  if (A.length > 200000) {
    return 0;
  }
  let openBracket = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] === "{" || A[i] === "[" || A[i] === "(") {
      openBracket.push(A[i]);
    }

    if (A[i] === "}" && openBracket.pop() !== "{") {
      return 0;
    }
    if (A[i] === "]" && openBracket.pop() !== "[") {
      return 0;
    }
    if (A[i] === ")" && openBracket.pop() !== "(") {
      return 0;
    }
  }

  if (openBracket.length > 0) {
    return 0;
  }
  return 1;
}

console.log(solution("{[()()]}")); //1
console.log(solution("([)()]")); //0
console.log(solution("{{{{"));
