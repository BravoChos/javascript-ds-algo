// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length === 3) return 0;
  const lastElement = A.pop();
  A.sort((a, b) => a - b);
  let result = 0;
  console.log(A);

  if (A[2] > lastElement) {
    A.slice(3).forEach((item) => {
      result += item;
    });
    
  }

  // A.slice(4).forEach((item) => {
  //   result += item;
  // });
  // return result + lastElement;
}

// console.log(solution([3, 2, 6, -1, 4, 5, -1, 2]));
// console.log(solution([5, 5, 5])); //0
console.log(solution([5, 17, 0, 3])); //17
