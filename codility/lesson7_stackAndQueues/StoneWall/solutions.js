// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
  // write your code in JavaScript (Node.js 8.9.4)
  var stack = [];
  var head = -1;
  var block = 0;
  var i = 0;
  while (i < H.length) {
    var h = H[i];
    if (head < 0) {
      ++head;
      stack[head] = h; //stack push
      ++i;
    } else if (stack[head] == h) {
      ++i;
    } else if (stack[head] < h) {
      ++head;
      stack[head] = h; //stack push
      ++i;
    } else {
      //stack[head] > h
      --head; //stack pop
      ++block;
    }
  }
  return block + head + 1;
}

console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8]));
