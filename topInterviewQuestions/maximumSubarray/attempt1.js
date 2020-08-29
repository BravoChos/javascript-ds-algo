/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let length = nums.length;
  if (length === 1) {
    return nums[0];
  }

  if (length === 2) {
    if (nums[1] > 0 && nums[0] < 0) {
      return nums[1];
    } else if (nums[1] > 0 && nums[0] > 0) {
      return nums[0] + nums[1];
    } else if ((nums[1] < 0 || nums[1] === 0) && nums[0] < 0) {
      return nums[0] > nums[1] ? nums[0] : nums[1];
    } else {
      return nums[0];
    }
  }

  let largestNum = nums[0];
  let tmp = [];

  for (let i = 1; i < length; i++) {
    if (nums[i] < 0) {
      if (largestNum < nums[i]) {
        tmp.push(nums[i]);
        if (tmp.length === 2) {
          tmp[0] > tmp[1] ? tmp.pop() : tmp.shift();
        }
        largestNum = nums[i];
      } else if (largestNum < nums[i] + nums[i - 1]) {
        largestNum = nums[i] + nums[i - 1];
      } else {
        tmp.push(largestNum);
        if (tmp.length === 2) {
          tmp[0] > tmp[1] ? tmp.pop() : tmp.shift();
        }
        largestNum =
          nums[i] + nums[i - 1] > nums[i - 1]
            ? nums[i] + nums[i - 1]
            : nums[i - 1];
      }
    } else {
      if (largestNum < nums[i]) {
        // console.log("sldkfjslkdfj");
        tmp.push(nums[i]);
        if (tmp.length === 2) {
          tmp[0] > tmp[1] ? tmp.pop() : tmp.shift();
        }
        largestNum = nums[i];
      } else {
        largestNum += nums[i];
      }
    }
  }

  // console.log(tmp);

  return tmp[0];
};

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
// console.log(maxSubArray([-2, 1])); //1
// console.log(maxSubArray([-1, 0])); // 0
// console.log(maxSubArray([1, -1, 1])); // 1
// console.log(maxSubArray([-2, -3, -1])); // -1
// console.log(maxSubArray([-1, 0, -2])); //0
console.log(maxSubArray([8, -19, 5, -4, 20]));
