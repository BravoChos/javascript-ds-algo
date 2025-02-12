function removeDuplicates_v1(nums: number[]): number {
  // Time complexity: O(2n)
  // Space complexity: O(n)
  let result = 0;
  let pairSet: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (pairSet[nums[i]] === 2) {
      nums[i] = nums[nums.length - 1];
    } else if (pairSet[nums[i]] === 1) {
      pairSet[nums[i]] = 2;
      result++;
    } else {
      pairSet[nums[i]] = 1;
      result++;
    }
  }
  nums.sort((a, b) => a - b);
  return result;
}

function removeDuplicates_v2(nums: number[]): number {
  // Time complexity: O(n)
  // Space complexity: O(n)
  let count: { [key: number]: number } = {};
  let k = 0;

  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] <= 2) {
      nums[k] = num;
      k++;
    }
  }
  console.log(nums);
  return k;
}

var removeDuplicates_v3 = function (nums: number[]): number {
  // Time complexity: O(n)
  // Space complexity: O(1)
  let k = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

console.log(removeDuplicates_v2([1, 1, 1, 2, 2, 3])); // k  = 5
console.log(removeDuplicates_v2([0, 0, 1, 1, 1, 1, 2, 3, 3])); // k = 7
