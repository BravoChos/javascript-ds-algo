// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Detected time complexity: O(N * M)
function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)
  result = [];
  let impactFactor;
  for (let j = 0; j < P.length; j++) {
    impactFactor = 4;
    for (let i = P[j]; i < Q[j] + 1; i++) {
      currentimpactFactor =
        S[i] === "A" ? 1 : S[i] === "C" ? 2 : S[i] === "G" ? 3 : 4;

      impactFactor =
        impactFactor > currentimpactFactor ? currentimpactFactor : impactFactor;
    }

    result.push(impactFactor);
  }
  return result;
}

console.log(solution("CAGCCTA", [2, 5, 0], [4, 5, 6])); // 2,4,1
console.log(solution("AC", [0, 0, 1], [0, 1, 1])); //1,1,2
