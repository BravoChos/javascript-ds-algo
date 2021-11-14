var result = {};
const solution = (input) => {
  let number = parseInt(input[0].split(" ")[0]);
  input.shift();

  input.splice(0, number - 1).forEach((a) => {
    let r = a.split(" ");
    // connection
    if (result[r[0]]) {
      result[r[0]][0].push(+r[1]);
    } else {
      result[[r[0]]] = [[+r[1]], [], false];
    }
    if (result[r[1]]) {
      result[r[1]][0].push(+r[0]);
    } else {
      result[[r[1]]] = [[+r[0]], [], false];
    }
  });

  findParentForEachElemnt(1);

  // answer the questions
  for (let i = 0; i < input.length; i++) {
    let type = +input[i][0];
    let target = +input[i][2];
    operator(type, target);
  }
  result = {};
};

const findParentForEachElemnt = (targetIndex) => {
  let children = result[targetIndex][0];
  if (children.length > 0) {
    for (let j = 0; j < children.length; j++) {
      result[children[j]][0] = result[children[j]][0].filter((item) => {
        return item !== targetIndex;
      });
      result[children[j]][1].push(targetIndex);
      findParentForEachElemnt(children[j]);
    }
  }
};

const operator = (_type, _target) => {
  if (_type == 1) {
    result[_target][2] = true;
    if (result[_target][0].length > 0) {
      result[_target][0].forEach((newTarget) => {
        operator(1, newTarget);
      });
    }
  } else if (_type == 2) {
    result[_target][2] = false;
    if (result[_target][1].length > 0) {
      for (let y = 0; y < result[_target][1].length; y++) {
        operator(2, result[_target][1][y]);
      }
    }
  } else if (_type == 3) {
    console.log(result[_target][2] ? 1 : 0);
  }
};

solution([
  "4 7",

  "3 4",
  "2 3",
  "2 1",

  "2 3",
  "3 1",
  "3 1",
  "3 3",
  "2 4",
  "3 4",
  "2 4",
]);

solution([
  "8 5",

  "8 1",
  "8 4",
  "5 6",
  "7 3",
  "2 5",
  "3 6",
  "4 6",

  "2 2",
  "3 2",
  "1 4",
  "3 7",
  "1 1",
]);
