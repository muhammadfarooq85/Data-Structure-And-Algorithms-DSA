// Binary Tree Data Structure
// each node has exactly two children (left and right)
// each node is itself a tree structure
// add node based on availability
// add from left to rght, level by level
// there is no inbuilt suppoert in javascript for binary tre we have to implement our own class to create a binary tree

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class UseBinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    const qeue = [this.root];
    // console.log(qeue);
    while (qeue.length > 0) {
      const current = qeue.shift();
      if (!current.left) {
        current.left = newNode;
        console.log(this.root);
        return;
      } else {
        qeue.push(current.left);
      }
      if (!current.right) {
        current.right = newNode;
        console.log(this.root);
        return;
      } else {
        qeue.push(current.right);
      }
    }
  }

  search(value) {
    if (this.root === null) {
      return false;
    }

    const qeue = [this.root];
    while (qeue.length > 0) {
      const current = qeue.shift();
      if (current.data === value) {
        return true;
      }

      if (current.left) {
        qeue.push(current.left);
      }

      if (current.right) {
        qeue.push(current.right);
      }
    }
    return false;
  }
}

const useBinaryTree = new UseBinaryTree();
console.log(useBinaryTree.add("hello..."));
console.log(useBinaryTree.add("hello1..."));
console.log(useBinaryTree.add("hello2..."));
console.log(useBinaryTree.add("hello3..."));
console.log(useBinaryTree.add("hello4..."));
console.log("finding hello1...", useBinaryTree.search("hello1...")); // true
console.log("finding hello6...", useBinaryTree.search("hello6...")); // false
