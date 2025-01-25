// Linked list:-  chain example

// chain is made up of links
// you can make a chain very long as you can
// You can also remove the bad links

// linked list (Single linked list)
// See this image to view better
// https://miro.medium.com/v2/resize:fit:953/1*iiEWrP2IznA6HbmuIdK0lQ.png

// It has three building blocks.
// Head, Node and Tail
// Head first node
// Tail last node have next is null and data is present
// Node has data and next data memory address

// Linked list
// data structure that consists of nodes where each nodes contain the data and next node memory address.
// Data:
// Pointer/Reference:

// Key operations:-

// insertion
// At the end
// At the beginning
// At the specific position

// deletion
// by value
// by position

// traversal
// visiting all nodes from start to end

// search: find a node
// length: returns the length

// No inbuilt support in javaScript

// Linked List implementation

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtData(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  traverse() {
    if (this.head === null) {
      return "No items in the linked list!";
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      return (currentNode = currentNode.next);
    }
  }

  deleteByValue(dataToDelete) {
    if (this.head === null) {
      return "No items in the linked list!";
    }

    let currentNode = this.head;
    while (currentNode.data === dataToDelete) {
      return (this.head = currentNode.next);
    }

    let previousNode = null;
    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      if (currentNode.data === dataToDelete) {
        return (previousNode.next = currentNode.next);
      }
    }
  }

  search(dataToSearch) {
    if (this.head === null) {
      return "No items in the linked list!";
    }
    let currentNode = this.head;
    if (currentNode.data === dataToSearch) {
      return true;
    }

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      if (currentNode.next === dataToSearch) {
        return true;
      }
    }
    return false;
  }
  
  length() {
    if (this.head === null) {
      return 0;
    }
    let currentNode = this.head;
    let count = 1;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      count++;
    }
    return count;
  }
}

const linkedList = new LinkedList();
console.log(linkedList.insertAtData(1));
console.log(linkedList.insertAtData(2));
// console.log(linkedList.insertAtData(3));
// console.log(linkedList.traverse());
// console.log(linkedList.deleteByValue(2));
// console.log(linkedList.traverse());
console.log(linkedList.search(2));
console.log(linkedList.length());
