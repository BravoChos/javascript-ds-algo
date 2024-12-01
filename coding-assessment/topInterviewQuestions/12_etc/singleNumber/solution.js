/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = {};

  for (var i = 0; i < nums.length; i++) {
    if (result[nums[i]]) {
      result[nums[i]] += 1;
    } else {
      result[nums[i]] = 1;
    }
  }

  for (key in result) {
    if (result[key] === 1) {
      return key;
    }
  }
};

// time O(n)
// space O(1)
function singleNumber2(nums) {
  return nums.reduce((prev, curr) => {
    console.log(prev, curr, prev ^ curr);
    return prev ^ curr;
  }, 0);
}
