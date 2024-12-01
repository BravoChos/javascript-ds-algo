/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

let t = [
  [2, 1, 1],
  [2, 3, 1],
  [3, 4, 1],
];

var networkDelayTime = function (times, n, k) {
  // const adjList = new Array(n + 1).fill([]); => very careful!!! call by reference error!
  const adjList = new Array(n + 1).fill(0).map(() => []);
  for (let i = 0; i < times.length; i++) {
    let time = times[i];
    // console.log(1, time, i, times[i]);
    // console.log(2, time[0], inDegree, inDegree[time[0]]);

    // if (adjList[time[0]])
    adjList[time[0]].push(time[1]);
    // console.log(3, inDegree[time[0]]);
  }
  console.log(adjList);

  let networkDelayTime = 0;

  // let vertex = adjList[k];

  // while (test.length){

  // }
  let calculateTime = (vertex) => {
    if (vertex.length === 1) {
      networkDelayTime += times[vertex[0]][2];
    } else {
      for (let i = 0; i < vertex.length; i++) {
        console.log("test");
        calculateTime
      }
    }
  };

  // for (let k = 0; k < vertex.length; k++) {}

  return networkDelayTime;
};

console.log(networkDelayTime(t, 4, 2));
