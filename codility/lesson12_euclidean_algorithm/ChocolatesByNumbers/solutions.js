// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, M) {
  // write your code in JavaScript (Node.js 8.9.4)
  if(N === 1) return 1;

  let arr = [];
  for(let i = 0; i < N; i++) {
      arr.push(true);
  }

  let cnt = 0;

  for(let i = 0; i < N; i++) {
      let idx = (i * M) % N
      if(arr[idx] === true) {
          arr[idx] = false;
          cnt++;
      } else {
          break;
      }
  }

  return cnt;
}
