const solution = (input) => {
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
  input = [];
  return sum;
};

console.log(solution(["3", "1 2 3"])); // 9
console.log(solution(["5", "1 3 5 7 9"])); // 61
console.log(solution(["3", "0 1 100"])); // 301
