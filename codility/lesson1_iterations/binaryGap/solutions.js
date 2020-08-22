function solution(N) {
	const binary = N.toString(2);
    const gapSet = new Set();

    let gapLength = 0;

    for (let i = 0; i < binary.length; i++) {
      const now = binary[i];
      const prev = binary[i - 1];
      if (now === '1' && prev === '0' && gapLength) {
        gapSet.add(gapLength);
        gapLength = 0;
      } else if (now === '1' && prev === '0' && !gapLength) {
        gapSet.add(gapLength);
        gapLength = 0;
      } else if (now === '0'){
        gapLength++;
      }
    }
	return gapSet.size ? Math.max(...gapSet) : 0;
}
console.log(solution(1041)); // 5
console.log(solution(5)); // 1
console.log(solution(6)); // 0
console.log(solution(20)); // 1
console.log(solution(328)); // 2
console.log(solution(51712)); // 2
console.log(solution(1610612737)); // 28
console.log(solution(1073741825)); //29

function solution1(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var maxGap = 0;
    var curMaxGap = 0;
    var binStr = N.toString(2);
    var startIndexFromEnd = binStr.length - 1;
    for (startIndexFromEnd; startIndexFromEnd >= 0; startIndexFromEnd--) {
      if (binStr.charAt(startIndexFromEnd) != "0") {
        break;
      }
    }
    for (var i = startIndexFromEnd - 1; i >= 0; i--) {
      if (binStr.charAt(i) == "0") {
        curMaxGap = curMaxGap + 1;
      } else {
        if (curMaxGap > maxGap) {
          maxGap = curMaxGap;
        }
        curMaxGap = 0;
      }
    }
    return maxGap;
  }
  
  console.log(solution1(1041)); // 5
  console.log(solution1(5)); // 1
  console.log(solution1(6)); // 0
  console.log(solution1(20)); // 1
  console.log(solution1(328)); // 2
  console.log(solution1(51712)); // 2
  console.log(solution1(1610612737)); // 28
  console.log(solution1(1073741825)); //29