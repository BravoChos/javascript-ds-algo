// Run by Node.js
const readline = require("readline");
let input = [];
(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    input.push(line.trim());
    if (input.length === 3) {
      await solution();
      rl.close();
    }
  }

  process.exit();
})();

Array.matrix = function (m, n, initial) {
  var a,
    i,
    j,
    mat = [];
  for (i = 0; i < m; i += 1) {
    a = [];
    for (j = 0; j < n; j += 1) {
      a[j] = initial;
    }
    mat[i] = a;
  }
  return mat;
};

const solution = async () => {
  let set = input[0].split(" ");
  let num = set[0];
  let cnt = set[1];
  let log = input[1].split(" ").map((item) => parseInt(item));
  let target_num = input[2];

  const target_number = target_num - 1;
  var arr = Array.matrix(num, cnt, false);
  const results = [];

  for (var j = 0; j < cnt; j++) {
    if (log[j] > 0) {
      arr[log[j] - 1][j] = true;
    } else {
      const target = log[j] * -1;
      arr[target - 1][j] = true;
    }
  }

  for (var q = 0; q < num; q++) {
    let isOpen = false;
    for (var p = 0; p < cnt; p++) {
      if (isOpen && arr[q][p] === false) {
        arr[q][p] = true;
      } else if (arr[q][p] === true) {
        isOpen = !isOpen;
      }
    }
  }

  for (var i = 0; i < cnt; i++) {
    if (arr[target_number][i]) {
      for (var k = 0; k < num; k++) {
        if (i !== target_number && arr[k][i]) {
          if (!results.includes(k + 1) && k !== target_number) {
            results.push(k + 1);
          }
        }
      }
    }
  }
  console.log(
    results
      .sort()
      .reduce((a, b) => a + " " + b)
      .trim()
  );
};
