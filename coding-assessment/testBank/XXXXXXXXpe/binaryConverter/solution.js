const solution = (dec) => {
  let result = 0;

  const counter = (integer) => {
    return integer
      .toString(2)
      .match(/1/g)
      .filter((item) => item !== "").length;
  };

  let target = counter(dec);

  for (let i = dec - 1; 0 < i; i--) {
    if (counter(i) === target) result++;
  }

  return result;
};

console.log(solution(9));
console.log(solution(8));
// console.log(solution(9));
// console.log(solution(9));
