// @param {number[]} nums
// @param {number} target
// @return {number[]}

var twoSum = function (nums, target) {
  if (nums.length < 2) {
    return false;
  }
  // let first;
  let firstIndex = 0;
  // let second;
  nums.sort((a, b) => a - b);
  console.log(nums)
  let index = 1;
  while (index < nums.length) {
    console.log(firstIndex,index)
    for (let i = index; i < nums.length; i++) {
      if (nums[firstIndex] + nums[i] > target) {
        return false;
      } else if (nums[firstIndex] + nums[i] === target) {
      
        return [firstIndex, i];
      }
    }

    firstIndex++;
    index++;
    console.log(firstIndex,index)
  }

  return true;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
