function solution(fish, baits) {
  fish.sort((a, b) => b - a);
  baits.sort((a, b) => b - a);

  // console.log(fish, baits);

  let baitUsage = new Array(baits.length).fill(0);
  let caught = 0;

  for (let i = 0; i < fish.length; i++) {
    let fishSize = fish[i];
    for (let j = 0; j < baits.length; j++) {
      if (baitUsage[j] < 3 && baits[j] < fishSize) {
        baitUsage[j]++;
        caught++;
        break;
      }
    }
  }

  return caught;
}

const fish = [3, 4, 8, 4, 9, 10, 6, 1, 10, 9];
const baits = [5, 8, 2, 2, 9, 10, 4, 9, 4, 8];
console.log(solution(fish, baits)); // 9
console.log(solution([1, 2, 3], [1])); // result: 2
