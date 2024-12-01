// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Detected time complexity: O(N + M)
function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)
  let resultArr = [];
  for (let i = 0; i < P.length; i++) {
    // slice메소드는 두 번째 index까지는 포함시키지 않으므로 포함해서 자를수있도록 +1 해줌
    let temp = S.slice(P[i], Q[i] + 1);

    if (temp.indexOf("A") !== -1) {
      resultArr.push(1);
    } else if (temp.indexOf("C") !== -1) {
      resultArr.push(2);
    } else if (temp.indexOf("G") !== -1) {
      resultArr.push(3);
    } else {
      resultArr.push(4);
    }
  }
  return resultArr;
}

console.log(solution("CAGCCTA", [2, 5, 0], [4, 5, 6])); // 2,4,1
console.log(solution("AC", [0, 0, 1], [0, 1, 1])); //1,1,2
