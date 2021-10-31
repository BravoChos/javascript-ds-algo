// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    solution(line);
    rl.close();
  }

  process.exit();
})();

let input = [];
const solution = (arg) => {
  input.push(arg);
  if (input.length < 2) return null;
  const count = input[0];
  let sortedArray = input[1]
    .trim()
    .split(" ")
    .map((item) => parseInt(item))
    .sort((a, b) => a - b);
  let middleIndex = Math.floor(count / 2);
  let negativeSet;

  if (count % 2 === 0) negativeSet = sortedArray.splice(0, middleIndex);
  else negativeSet = sortedArray.splice(0, middleIndex).sort((a, b) => b - a);

  let sum = 0;

  for (let i = 0; i < negativeSet.length; i++) {
    sum -= negativeSet[i] * 2 * (i + 1);
  }

  for (let j = 0; j < sortedArray.length; j++) {
    sum += sortedArray[j] * (2 * j + 1);
  }
  console.log(sum);
  input = [];
};
