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

  // traverseFromStart() {
  //   if (this.head === null) {
  //     return "No items in the linked list!";
  //   }

  //   let currentNode = this.head;
  //   do {
  //     console.log(currentNode.data);
  //     currentNode = currentNode.next;
  //   } while (currentNode !== null);
  // }

  traverseFromEnd() {
    if (this.head === null) {
      return "No items in the linked list!";
    }

    let currentNode = this.tail;
    do {
      console.log(currentNode.data);
      currentNode = currentNode.previous;
    } while (currentNode !== null);
  }

  delete(dataToDelete) {
    if (this.head === null) {
      return "No items in the linked list!";
    }

    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === dataToDelete) {
        if (currentNode === this.head) {
          this.head = currentNode.next;
          if (this.head) {
            this.head.previous = null;
          }
        }

        // Deleting node from middle
        if (currentNode.previous) {
          currentNode.previous.next = currentNode.next;
        }

        if (currentNode.next) {
          currentNode.next.previous = currentNode.previous;
        }

        // Deleting node from tail
        if (currentNode === this.tail) {
          this.tail = currentNode.previous;
          if (this.tail) {
            this.tail.next = null;
          }
        }

        return; // Exit after deletion is complete
      }

      currentNode = currentNode.next;
    }

    return "Node not found!";
  }

  search(valueToSearch) {
    if (this.head === null) {
      return "No items in the linked list!";
    }

    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === valueToSearch) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  length() {
    if (this.head == null) {
      return 0;
    }
    let currentNode = this.head;
    let counter = 0;
    while (currentNode !== null) {
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  }
}

const newInstance = new useDoublyLinkedList();
console.log(newInstance.append(1));
console.log(newInstance.append(2));
console.log(newInstance.append(3));
console.log(newInstance.traverse());
console.log(newInstance.delete(3));
console.log(newInstance.search(5));
console.log(newInstance.length());

// Note:- smjne ki koshih kr rahe hy smjh a jaye.
