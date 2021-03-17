class ListNode {
  constructor(val, next = null, prev = null, child = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
    this.child = child;
  }
}
// Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
// Output: [1,2,3,7,8,11,12,9,10,4,5,6]

var flatten = function (head) {
  let result = [];
  let set = [];
  let childPoint = -1;
  for (let i = 0; i < head.length; i++) {
    if (head[i]) {
      if (childPoint >= 0) {
        result.push(set);
        result.push(childPoint);
        set = [head[i]];
        childPoint = -1;
      } else {
        set.push(head[i]);
        if (i === head.length - 1) {
          result.push(set);
        }
      }
    } else {
      if (childPoint >= 0) {
        childPoint++;
      } else {
        childPoint = 0;
      }
    }
  }

  let length = result.length;
  while (result.length > 2) {
    let childNodes = result.pop();
    let splicePosition = result.pop() + 1;
    length = length - 2;
    result[length - 1].splice(splicePosition, 0, ...childNodes);
  }
  return result[0];
};
console.log(
  flatten([1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12])
);
