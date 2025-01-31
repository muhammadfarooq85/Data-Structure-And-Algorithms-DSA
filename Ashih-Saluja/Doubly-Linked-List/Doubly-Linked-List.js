// Doubly linked list

// A doubly linked list is a data structure that consists of a set of nodes, each of which contains a value and two pointers, one pointing to the previous node in the list and one pointing to the next node in the list.

// View this image to clearify the concept of doubly linked list...

// https://media.geeksforgeeks.org/wp-content/uploads/20240603104502/Doubly-Linked-List-in-Python.

// no inbult support in JavaScript

// Key operrations:-
// Insertion
// deletion
// traverse

// creating doubly lnked list

class Node {
  constructor(data) {
    this.prev = null; // prev node address. First it is null.
    this.data = data; // value or data of node.
    this.next = null; // next node address. First it is also null.
  }
}

class useDoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // add elem at the end
  append(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentLastNode = this.tail;
      currentLastNode.next = newNode;
      newNode.prev = currentLastNode;
      this.tail = newNode;
    }
  }

  // add elem at the beginning
  prepend(data) {
    let newNode = new Node(data);
    let currentfirstNode = this.head;
    if (this.head === null) {
      this.head = newNode;
      newNode.prev = null;
      newNode.next = this.tail;
    } else {
      this.head = newNode;
      newNode.next = currentfirstNode;
      newNode.prev = null;
      currentfirstNode.prev = newNode;
    }
  }

  traverse() {
    if (this.head === null) {
      return "No items in the linked list!";
    }

    let currentNode = this.head;
    do {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    } while (currentNode !== null);
  }
}
