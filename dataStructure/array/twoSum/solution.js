// @param {number[]} nums
// @param {number} target
// @return {number[]}

// Approach 1: Brute Force
// The brute force approach is simple. Loop through each element xx and find if there is another value that equals to target - xtarget−x.

// Complexity Analysis:
// Time complexity : O(n^2). For each element, we try to find its complement by looping through the rest of array which takes O(n) time.
// Therefore, the time complexity is O(n^2).

// Space complexity : O(1).

const twoSumType1 = function (nums, target) {
  var ret = [];

  for (var n = 0; n < nums.length; n++) {
    for (var i = 1; i < nums.length; i++) {
      if (nums[n] + nums[i] == target) {
        ret.push([n, i]);
      }
    }
  }

  return ret;
};

const twoSumType2 = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
};
console.log(twoSumType2([2, 7, 11, 15], 9));
console.log(twoSumType2([3, 5, 12, 2, 1], 4));
console.log(twoSumType2([-3, 1, 2, 5, 0], 2));
console.log(twoSumType2([3, 2, 4], 6));

var twoSumType3 = function (nums, target) {
  var saved = {};
  var result = [];
  for (i = 0; i < nums.length; i++) {
    if (saved.hasOwnProperty(nums[i])) {
      result[0] = saved[nums[i]] + 1;
      result[1] = i + 1;
      return result;
    }
    saved[target - nums[i]] = i;
  }
};
