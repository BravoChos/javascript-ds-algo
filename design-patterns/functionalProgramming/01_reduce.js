// FP pattern - reduce
// reduce(), reduceRight()

const arr = [1, 2, 3, 4, 5];

// #1.
arr.reduce((x, y) => {
  console.log(`${x}+${y} = ${x + y}`);
  return x + y;
});

const sum = (x, y) => x + y;
const result = arr.reduce(sum);

console.log(result);

// #2.
const average = (sum, val, i, arr) => {
  sum += val;
  return i === arr.length - 1 ? sum / arr.length : sum;
};

console.log(arr.reduce(average));
