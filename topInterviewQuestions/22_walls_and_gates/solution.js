const INF = 2147483647;

const testMatrix = [
  [INF, -1, 0, INF],
  [INF, INF, INF, 0],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
];

const WALL = -1;
const GATE = 0;
const EMPTY = 2147483647;
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const deepCopy = (obj) => {
  if (typeof obj == "object") {
    if (Array.isArray(obj)) {
      var l = obj.length;
      var r = new Array(l);
      for (var i = 0; i < l; i++) {
        r[i] = deepCopy(obj[i]);
      }
      return r;
    } else {
      var r = {};
      r.prototype = obj.prototype;
      for (var k in obj) {
        r[k] = deepCopy(obj[k]);
      }
      return r;
    }
  }
  return obj;
};

const dfs = (grid, row, col, count) => {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || count > grid[row][col])
    return;
  grid[row][col] = count;
  for (let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    dfs(grid, row + currentDir[0], col + currentDir[1], count + 1);
  }
};

const wallsAndGates = (rooms) => {
  const result = deepCopy(rooms);

  for (let row = 0; row < result.length; row++) {
    for (let col = 0; col < result[0].length; col++) {
      if (result[row][col] === GATE) dfs(result, row, col, 0);
    }
  }

  return result;
};

console.log(wallsAndGates(testMatrix));
console.log(testMatrix);
