// time complexity = O(N) or O(N*log(N))
function solution(A) {
  let map = {};
  for (var i = 0; i < A.length; i++) {
    map[A[i]] = ++map[A[i]] || 1;
  }
  for (properties in map) {
    if (map[properties] % 2 != 0) return parseInt(properties);
  }
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
console.log(solution([42]));
