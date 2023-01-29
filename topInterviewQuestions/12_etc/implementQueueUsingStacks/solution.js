function maxSubArray(arr){
    let a1 = 0
    let a2 = arr[0]
    arr.forEach((i,a) => {
      a1 = Math.max(i, a1 + i)
      a2 = Math.max(a2, a1)
    })
    return a2
  }

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
console.log(maxSubArray([-2, 1])); //1
console.log(maxSubArray([-1, 0])); // 0
console.log(maxSubArray([1, -1, 1])); // 1
console.log(maxSubArray([-2, -3, -1])); // -1
console.log(maxSubArray([-1, 0, -2])); //0
console.log(maxSubArray([8, -19, 5, -4, 20])); //21