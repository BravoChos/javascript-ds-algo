// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  let C = [];
  let D = [];
  let index = 1;
  let finish = false;
  C[0] = A[0];
  D[0] = B[0];
  //fill the 0s

  while (index < A.length) {
    if (D[D.length - 1] === 0) {
      //if the last pushed element was 0, we will anyway add the new one (they stack or don't meet)
      C.push(A[index]);
      D.push(B[index]);
      index++;
    } else {
      //if the last element is 1, we start to navigate, be careful about reaching the end
      if (B[index] === 1) {
        C.push(A[index]);
        D.push(B[index]);
        index++;
      } else {
        let stop = 0;
        while (D[D.length - 1] === 1 && stop !== 1) {
          if (A[index] > C[C.length - 1]) {
            C.pop();
            D.pop();
            //if we are at the end place the big fish in the stack, to avoid an infinite loop
            if (C.length === 0) {
              index++;
              stop = 1;
              C.push(A[index]);
              D.push(B[index]);
            }
          } else {
            index++;
            stop = 1;
          }
        }
      }
    }
  }
  return C.length;