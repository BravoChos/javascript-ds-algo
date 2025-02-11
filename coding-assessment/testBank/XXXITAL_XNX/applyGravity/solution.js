function applyGravity(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const figureCells = [];

  // 1. 도형 좌표 수집
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === "F") {
        figureCells.push([r, c]);
      }
    }
  }

  // 2. 도형을 아래로 얼마나 떨어뜨릴 수 있는지 계산
  let maxDrop = Infinity;
  for (const [r, c] of figureCells) {
    let drop = 0;
    let curr = r + 1;
    while (curr < rows) {
      const isPartOfFigure = figureCells.some(([fr, fc]) => fr === curr && fc === c);
      const below = matrix[curr][c];
      if (below === "-" || isPartOfFigure) {
        drop++;
        curr++;
      } else {
        break;
      }
    }
    maxDrop = Math.min(maxDrop, drop);
  }

  // 3. 기존 F 지우기
  for (const [r, c] of figureCells) {
    matrix[r][c] = "-";
  }

  // 4. 새로운 위치에 F 배치
  for (const [r, c] of figureCells) {
    matrix[r + maxDrop][c] = "F";
  }

  return matrix;
}

let matrix = [
  ["F", "F", "F"],
  ["-", "F", "-"],
  ["-", "F", "F"],
  ["#", "F", "-"],
  ["F", "F", "-"],
  ["-", "-", "-"],
  ["-", "-", "#"],
  ["-", "-", "-"],
];

const result = applyGravity(matrix);
console.log(result.map((row) => JSON.stringify(row)).join("\n"));

// [
// ["-", "-", "-"],
// ["-", "-", "-"],
// ["F", "F", "F"],
// ["#", "F", "-"],
// ["-", "F", "F"],
// ["-", "F", "-"],
// ["F", "F", "#"],
// ["-", "-", "-"],
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
console.log(result2.map((row) => JSON.stringify(row)).join("\n"));

// [
//   ['-', '-', '-', '-'],
//   ['-', 'F', 'F', '-'],
//   ['-', 'F', 'F', '-'],
//   ['-', '#', '-', '-'],
//   ['-', '-', '-', '-'],
//   ['-', '-', '-', '-']
// ]
