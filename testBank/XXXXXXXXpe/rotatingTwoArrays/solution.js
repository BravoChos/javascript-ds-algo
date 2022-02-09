function solution(arrA, arrB) {
  let countRotation = 0;
  const length = arrA.length;

  const recursion = (array) => {
    let lastItem = array.pop();
    array.splice(0, 0, lastItem);

    for (let i = 0; i < length; i++) {
      if (array[i] !== arrB[i]) {
        countRotation++;
        if (countRotation === length) return false;
        return recursion(array);
      }
    }
    return true;
  };

  return recursion(arrA);
}

console.log(solution([7, 8, 10], [8, 10, 7])); // true
console.log(solution([4, 7, 2, 9], [2, 9, 4, 8])); // false
console.log(solution([4, 7, 2, 9], [2, 9, 4, 7])); // true
