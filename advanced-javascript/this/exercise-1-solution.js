const array = [1, 2, 3];

function getMaxNumber(arr) {
  let max;
  for (let i = 0; i < arr.length; i++) {
    if (!max || max <= arr[i]) max = arr[i];
  }
  return max;
}

getMaxNumber(array); // should return 3
console.log(getMaxNumber(array));

function getMaxNumber2(arr) {
  return Math.max(...arr);
}

getMaxNumber2(array); // should return 3
console.log(getMaxNumber2(array));

// in this case, the 'this' keyword doesn't matter!
function getMaxNumber3(arr) {
  return Math.max.apply(null, arr);
}

getMaxNumber3(array); // should return 3
console.log(getMaxNumber3(array));
