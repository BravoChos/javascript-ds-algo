var MyQueue = function () {
  this.enqueue = [];
  this.dequeue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.enqueue.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.dequeue.length === 0) {
    while (this.enqueue.length > 0) {
      this.dequeue.push(this.enqueue.pop());
    }
  }
  return this.dequeue.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.dequeue.length === 0) {
    while (this.enqueue.length > 0) {
      this.dequeue.push(this.enqueue.pop());
    }
  }
  return this.dequeue[this.dequeue.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.enqueue.length === 0 && this.dequeue.length === 0;
};

let myQueue = new MyQueue();
console.log(myQueue.push(1)); // queue is: [1]
console.log(myQueue.push(2)); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue.peek()); // queue is: 1
console.log(myQueue.pop()); // return 1, queue is [2]
console.log(myQueue.push(3));
console.log(myQueue.peek()); // queue is: 1
console.log(myQueue.empty()); // return false
console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(myQueue.empty()); // return true
