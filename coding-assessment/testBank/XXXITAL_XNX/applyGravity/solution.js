function applyGravity(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // BFS
  function findFigure() {
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const figure = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (matrix[i][j] === "F" && !visited[i][j]) {
          const queue = [[i, j]];
          visited[i][j] = true;

          while (queue.length > 0) {
            const [r, c] = queue.shift();
            figure.push([r, c]);

            for (const [dr, dc] of directions) {
              const nr = r + dr;
              const nc = c + dc;
              if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && matrix[nr][nc] === "F" && !visited[nr][nc]) {
                visited[nr][nc] = true;
                queue.push([nr, nc]);
              }
            }
          }
          return figure;
        }
      }
    }
    return [];
  }

  const figure = findFigure();

  let maxFall = Infinity;

  for (const [r, c] of figure) {
    let fall = 0;
    let nr = r + 1;
    while (nr < rows && matrix[nr][c] === "-") {
      nr++;
      fall++;
    }

    if (figure.some(([fr, fc]) => fr === nr && fc === c)) continue;

    maxFall = Math.min(maxFall, fall);
  }

  for (const [r, c] of figure) {
    matrix[r][c] = "-";
  }

  for (const [r, c] of figure) {
    matrix[r + maxFall][c] = "F";
  }

  return matrix;
}

const matrix = [
  ["F", "F", "F"],
  ["-", "F", "-"],
  ["-", "F", "F"],
  ["#", "F", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "#", "-"],
  ["-", "-", "-"],
];

const result = applyGravity(matrix);
console.log(result.map((row) => row.join(" ")).join("\n"));

// [
//   ["-", "-", "-"],
//   ["-", "-", "-"],
//   ["-", "-", "-"],
//   ["#", "-", "-"],
//   ["F", "F", "F"],
//   ["-", "F", "-"],
//   ["-", "F", "F"],
//   ["-", "F", "-"],
// ];

const matrix2 = [
  ["-", "-", "-", "-"],
  ["-", "F", "F", "-"],
  ["-", "F", "F", "-"],
  ["-", "-", "-", "-"],
  ["-", "#", "-", "-"],
  ["-", "-", "-", "-"],
];

const result2 = applyGravity(matrix2);
console.log(result2.map((row) => row.join(" ")).join("\n"));

// [
//   ['-', '-', '-', '-'],
//   ['-', '-', '-', '-'],
//   ['-', '-', '-', '-'],
//   ['-', '#', '-', '-'],
//   ['-', 'F', 'F', '-'],
//   ['-', 'F', 'F', '-']
// ]
