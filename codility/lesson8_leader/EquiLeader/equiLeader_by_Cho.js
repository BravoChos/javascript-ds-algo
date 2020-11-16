// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// 44%
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const findDominater = () => {
    let arr = [];
    for (let i = 0; i < A.length; i++) {
      if (!arr[A[i]]) arr[A[i]] = 1;
      else arr[A[i]]++;
      if (arr[A[i]] > A.length / 2)
        return {
          leader: A[i],
          count: arr[A[i]],
        };
    }
    return false;
  };
  const { leader, count } = findDominater();
  if (leader === false) return 0;

  let equiLeader = 0;
  let stack = [];
  for (let i = 0; i < A.length; i++) {
    if (
      stack.length > Math.floor(i / 2) &&
      count - stack.length > Math.floor((A.length - i) / 2)
    ) {
      equiLeader++;
    }
    if (A[i] === leader) stack.push(i);
  }

  return equiLeader;
}
console.log(solution([4, 3, 4, 4, 4, 2]));
console.log(solution([0])); //0
console.log(solution([0, 0])); //1
