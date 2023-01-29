/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const p = [
  [1, 0],
  [2, 1],
  [2, 5],
  [0, 3],
  [4, 3],
  [3, 5],
  [4, 5],
];

var canFinish = function (numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0);

  console.log(inDegree);

  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;
  }
  console.log(inDegree);

  const stack = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      stack.push(i);
    }
  }

  console.log(stack);
  // check if we actually test all the vertex, and it's not cycle
  let count = 0;

  while (stack.length) {
    const current = stack.pop();
    count++;

    for (let i = 0; i < prerequisites.length; i++) {
      const pair = prerequisites[i];
      if (pair[1] === current) {
        inDegree[pair[0]]--;
        if (inDegree[pair[0]] === 0) {
          stack.push(pair[0]);
        }
      }
    }
  }

  return count === numCourses;
};

console.log(canFinish(6, p));
console.log(canFinish(2,[[1,0],[0,1]]))
