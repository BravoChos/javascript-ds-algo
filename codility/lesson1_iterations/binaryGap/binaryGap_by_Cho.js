// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let temp = N;
    let binaryIndex = [];
    let longestCountGap = 0;
  
    const fnFoundLongestCount = (num) => {
      if (num === 1) {
          binaryIndex.push(0);
      } else if (num === 0) {
        return null;
      }
  
      let n = 1;
      while (Math.pow(2, n) < num) {
        n++;
      }
  
      let iteration = false;
      if (num === Math.pow(2, n)) {
        binaryIndex.push(n);
      } else {
        binaryIndex.push(n - 1);
        iteration = true;
      }
  
      if (binaryIndex.length > 1) {
        if (binaryIndex[0] - binaryIndex[1] !== 1) {
          longestCountGap =
            longestCountGap > binaryIndex[0] - binaryIndex[1] - 1
              ? longestCountGap
              : binaryIndex[0] - binaryIndex[1] - 1;
        }
        binaryIndex.shift();
      }
      if (iteration) {
        fnFoundLongestCount(num - Math.pow(2, n - 1));
      }
    };
  
    fnFoundLongestCount(temp);
    return longestCountGap;
  }
  console.log(solution(1041)); // 5
  console.log(solution(5)); // 1
  console.log(solution(6)); // 0
  console.log(solution(20)); // 1
  console.log(solution(328)); // 2
  console.log(solution(51712)); // 2
  console.log(solution(1610612737)); // 28
  console.log(solution(1073741825)); //29
  