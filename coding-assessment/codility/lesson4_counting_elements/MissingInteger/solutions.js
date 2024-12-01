// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  //   The complexity of my solution is O(N) or O(N * log(N)).
  // First, we check which is the max value of the array. If it is below 0 we immediately return 1.
  // We then fill an array of length max with the number of occurrences of each positive element from the A array.
  // Lastly, we check for the first appearance of 0 in the array of occurrence and return the value we were looking for.

  let max = Math.max.apply(null, A);
  if (max < 0) return 1;

  let B = new Array(max).fill(0);
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      B[A[i] - 1]++;
    }
  }
  let index = B.indexOf(0);
  if (index === -1) {
    return max + 1;
  } else {
    return index + 1;
  }
}
console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([1, 2, 3])); // 4
console.log(solution([-1, -3])); // 1

function solution2(A) {
  const len = A.length;
  const hash = {};
  for (let i = 0; i < len; i++) {
      // here we are making an object with all 
      // numbers in a given array as object keys and values
      // if 0 is given as possible digit we could assing 
      // hash[A[i]] = true; or any truthy value
      hash[A[i]] = A[i];
  }
  for (let i = 1; i < 1000002; i++) {
      // here we are trying to find any number 
      // between 1 and 1000001 (given constraints) 
      // which do not exists in an object
      // if the number is not in the object that's our missing one
      if(!hash[i]) return i;
  }
  return 1;
}