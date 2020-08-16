var moveZeroes = function (nums) {
  var arr = [];
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] == 0) {
      arr.push(...nums.splice(i, 1));
      i--;
    }
  }
  nums.push(...arr);

  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
