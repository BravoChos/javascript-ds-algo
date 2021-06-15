// https://leetcode.com/problems/implement-queue-using-stacks/description/
// 232. Implement Queue using Stacks
class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }
  enqueue() {}
  dequeue() {}
  peek() {}
}

const myQueue = new CrazyQueue();
myQueue.peek();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();
