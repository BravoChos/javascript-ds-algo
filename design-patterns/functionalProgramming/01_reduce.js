// FP pattern - reduce
// reduce(), reduceRight()

const arr = [1, 2, 3, 4, 5];

arr.reduce((x, y) => {
  console.log(`${x}+${y} = ${x + y}`);
  return x + y;
});

const sum = (x, y) => x + y;
const result = arr.reduce(sum);

console.log(result);
