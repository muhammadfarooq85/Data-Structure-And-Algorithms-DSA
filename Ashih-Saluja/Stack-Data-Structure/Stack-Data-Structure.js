// Stack Data Structure

// stack is a data structure it stores many elements
// it follows Last In First Out (LIFO)
// Like stack of Plates 🍽🍽🍽

// Stack Operations

// Push: add item at the top of stack
// Pop: removes the element from top
// Peek: returns the top elementat the top of stack
// Size: returns the number of element of items in stack

// No in-build support of stack in JavaScript.
// we will create our stck in class
// It will be based on array

// class

class Stack {
  #items = [];

  // push item from the top of stack
  push(item) {
    return this.#items.push(item);
  }

  // remove item from the top of stack
  pop() {
    if (this.isEmpty()) {
      throw new Error("No items in the array!");
    }
    return this.#items.pop();
  }

  // returns item from the top of stack
  peek() {
    if (this.isEmpty()) {
      // if (this.items.length === 0) {
      return null;
    }
    return this.#items[this.#items.length - 1];
  }

  // is stack empty or not
  isEmpty() {
    return this.#items.length === 0;
  }

  // returns item of the stack
  size() {
    return this.#items.length;
  }
}

// Usage

const useStack = new Stack();
useStack.push(8185);
console.log("Peek...", useStack.peek());
console.log("Pop...", useStack.pop());
console.log("Is Empty...", useStack.isEmpty());
useStack.push(8185);
useStack.push(8186);
useStack.push(8187);
console.log("Is Empty...", useStack.isEmpty());
console.log("Size of stack ...", useStack.size());
console.log("Pop...", useStack.pop());
console.log("Pop...", useStack.pop());
console.log("Pop...", useStack.pop());
console.log("Peek...", useStack.peek());
console.log("All items...", useStack); // all present items

// https://youtu.be/6jqvG91sE08?si=0NkaR2unaEii3IX5

// Browser Back.js

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let exit = false;

while (!exit) {
  const userChoice = prompt(`Please selecte one of the below choice
  1. Press 1 to add new domain.
  2. Press 2 to see the current domain.
  3. Press 3 to go back.
  4. Press 4 and them hit enter.
  `);
  4;

  const userChoiceNumber = parseInt(userChoice);
  console.log(userChoiceNumber);

  switch (userChoiceNumber) {
    case 1:
      const domainName = prompt("Please provide new domain name:");
      console.log(domainName);
      useStack.push(domainName);
      console.log(domainName + " is now open at");
      break;
    case 2:
      const currentDomain = useStack.peek();
      console.log("currentDomain domain is " + currentDomain);
      break;
    case 3:
      useStack.pop();
      const previousDomain = useStack.peek();
      console.log("Previous domain is " + previousDomain);
      break;
    case 4:
      exit = true;
      break;
  }
}
