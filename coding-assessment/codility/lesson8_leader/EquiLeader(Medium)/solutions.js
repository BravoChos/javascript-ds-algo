// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// Detected time complexity: O(N);

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  var rightCounters = [];
  var leftCounters = [];
  var leaders = [];
  for (var i = A.length - 1; i >= 0; i--) {
    var current = A[i];
    if (!rightCounters[current]) {
      rightCounters[current] = 1;
    } else rightCounters[current]++;
    if (rightCounters[current] > (A.length - i) / 2) leaders[i] = current;
    else {
      if (
        i != A.length - 1 &&
        rightCounters[leaders[i + 1]] > (A.length - i) / 2
      )
        leaders[i] = leaders[i + 1];
      else leaders[i] = -1;
    }
  }
  var counter = 0;
  var lastLeader = A[0];
  for (var i = 0; i < A.length; i++) {
    var current = A[i];
    if (!leftCounters[current]) leftCounters[current] = 1;
    else leftCounters[current]++;
    if (leftCounters[current] > (i + 1) / 2) {
      if (current == leaders[i + 1]) counter++;
      lastLeader = current;
    } else {
      if (lastLeader != -1 && leftCounters[lastLeader] > (i + 1) / 2) {
        if (lastLeader == leaders[i + 1]) counter++;
      } else lastLeader = -1;
    }
  }
  return counter;
}
console.log(solution([4, 3, 4, 4, 4, 2]));
console.log(solution([0])); //0
console.log(solution([0, 0])); //1
