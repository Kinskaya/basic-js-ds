const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.tail = null;
    this.head = null;
    this.next = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue( value ) {
    let node = new ListNode(value, null);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    return node.value;
  }

  dequeue() {
    if (this.head !== null) {
      let current = this.head;
      this.head = this.head.next;
      return current.value;
    } else {
      if (this.tail !== null) {
        this.tail = null;
        return this.tail;
      }
    }
  }

}

