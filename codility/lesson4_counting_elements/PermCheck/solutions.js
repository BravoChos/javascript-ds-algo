function solution(A) {
  let set = new Set(); // holds a unique set of values
  let max = 1; // largest number in set
  let min = 1; // smallest number in set
  let n = A.length

  for (let i = 0; i < n; i += 1) {
      let num = A[i];
      if (num > max) {
          max = num; // determine max
      } else if (num < min) {
          min = num; // determine min
      }
      set.add(num) // only permits unique values
  }
  
  let m = set.size // size of set
  let range = (max - min) + 1 // size of a sequential permutaion, give range

  // conditions required to solve puzzle
  return n === m && range === m ? 1 : 0 
}

console.log(solution([1]));
console.log(solution([4, 1, 3, 2]));
console.log(solution([4, 1, 2]));
console.log(solution([2, 3, 4]));
