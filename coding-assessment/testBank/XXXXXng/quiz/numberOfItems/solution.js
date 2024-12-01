function numberOfItems(arr, item) {
  let count = 0;
  return recursion(arr, item, count);
}

function recursion(_arr, _target, _count) {
  let count = 0;
  for (var i = 0; i < _arr.length; i++) {
    if (_arr[i] === _target) {
      count++;
    } else if (Array.isArray(_arr[i]) && _arr[i].length > 0) {
      let rCount = recursion(_arr[i], _target, count);
      count += rCount;
    }
  }
  return count;
}

var arr = [25, "apple", ["banana", "strawberry", "apple", 25]];
console.log(numberOfItems(arr, 25)); //2
console.log(numberOfItems(arr, "apple")); //2
