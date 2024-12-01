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

// 1. naive BFS
const canFinishNaivelyBFS = function (n, prerequisites) {
  const adjList = new Array(n).fill(0).map(() => []);

  for (let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    adjList[pair[1]].push(pair[0]);
  }

  for (let v = 0; v < n; v++) {
    const queue = [];
    const seen = {};
    for (let i = 0; i < adjList[v].length; i++) {
      queue.push(adjList[v][i]);
    }

    while (queue.length) {
      const current = queue.shift();
      seen[current] = true;

      if (current === v) return false;
      const adjacent = adjList[current];
      for (let i = 0; i < adjacent.length; i++) {
        const next = adjacent[i];
        if (!seen[next]) {
          queue.push(next);
        }
      }
    }
  }

  return true;
};

// 2. Topological Sort without adjacency list
const canFinish = function(n, prerequisites) {
  const inDegree = new Array(n).fill(0);
  
  for(let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;
  }
  
  const stack = [];
  
  for(let i = 0; i < inDegree.length; i++) {
    if(inDegree[i] === 0) {
      stack.push(i);
    }
  }
  
  let count = 0;
  
  while(stack.length) {
    const current = stack.pop();
    count++;
    
    for(let i = 0; i < prerequisites.length; i++) {
      const pair = prerequisites[i];
      if(pair[1] === current) {
        inDegree[pair[0]]--;
        if(inDegree[pair[0]] === 0) {
          stack.push(pair[0]);
        }
      }
    }
  }
  
  return count === n;
};


canFinish(6, p)