/*Solution with time complexity of O(n^2). Quadratic Algorithm.
Idea: The sum of A[i..j] can be efficiently calculated as (sum of A[i..j-1]) + A[j].*/

function findMaxSubArrayBruteForce(arr) {
  var max_so_far = Number.NEGATIVE_INFINITY;
  var leftIndex = 0,
    rightIndex = arr.length - 1,
    len = arr.length;

  for (var i = 0; i < len; i++) {
    maxSum = 0;

    for (var j = i; j < len; j++) {
      maxSum += arr[j];

      if (max_so_far < maxSum) {
        leftIndex = i;
        max_so_far = maxSum;
        rightIndex = j;
      }
    }
  }
  //   return {
  //     left: leftIndex,
  //     right: rightIndex,
  //     final_max_sum_subArray: max_so_far,
  //   };
  return max_so_far;
}

console.log(findMaxSubArrayBruteForce([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
console.log(findMaxSubArrayBruteForce([-2, 1])); //1
console.log(findMaxSubArrayBruteForce([-1, 0])); // 0
console.log(findMaxSubArrayBruteForce([1, -1, 1])); // 1
console.log(findMaxSubArrayBruteForce([-2, -3, -1])); // -1
console.log(findMaxSubArrayBruteForce([-1, 0, -2])); //0
console.log(findMaxSubArrayBruteForce([8, -19, 5, -4, 20]));
