/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

// ---- Generate our linked list ----

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

// --------- Our solution -----------

var reverseBetween = function (head, m, n) {
  let currentNode = head;
  let mleftPosition;
  let mPosition;
  let nleftPosition;
  let nPosition;

  if (head.val === m) {
    mleftPosition = null;
    mPosition = head;
  }

  while (currentNode && currentNode.next) {
    const next = currentNode.next;

    if (currentNode.next.val === m) {
      mleftPosition = currentNode;
      mPosition = currentNode.next;
    } else if (currentNode.next.val === n) {
      nleftPosition = currentNode;
      nPosition = currentNode.next;
    }
    currentNode = next;
    // break;
  }

  const nPositionNext = nPosition.next;
  if (mleftPosition) mleftPosition.next = nPosition;
  nPosition.next = mPosition.next;
  nleftPosition.next = mPosition;
  mPosition.next = nPositionNext;
  return head;
};

printList(linkedList);
console.log("after reverse");
printList(reverseBetween(linkedList, 2, 4));
