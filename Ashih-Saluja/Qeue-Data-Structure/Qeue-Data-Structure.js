// Qeue Data Structure
// Qeue means row
// Qeue follows First In First Out principal (FIFO)
// Qeue has one entry point and one out point
// JavaScript has no in built support for Qeue data structure
// We will built our own solution for Qeue Data Structure
// Qeuee data structure built on the top of array
// We can store multiple elements like array
// We will take example of printing a doc. Where user give commands to the printer to print something. And Printer follows all qeue data structure roles and regulations.

// Advantages
// Qeue helps to mainatain the order
// Means who came first served first
// Ensure fairness

// Qeue Data Structure Operations
// inqeue: add element at the end of qeue
// deqeue: remove element at the front of qeue
// peek: get the element at the front of qeue without removing it
// isEmpty: chks if empty or not
// size: returns the size of qeue

class Qeue {
  // Making it porivate to not access it outside...
  #tickets = [];

  inqeue(ticket) {
    this.#tickets.push(ticket);
  }

  deqeue() {
    if (this.isEmpty()) throw new Error("There are no users in the Qeue!");
    return this.#tickets.shift();
  }

  peek() {
    return this.#tickets[0];
  }

  isEmpty() {
    return this.#tickets.length === 0;
  }

  size() {
    return this.#tickets.length;
  }
}

const useQeue = new Qeue();
// User 1 give a command to print a CV
// User 1
useQeue.inqeue("CV_FAROOQ");

// User 2 give a command to print a Resume
// User 2
useQeue.inqeue("RESUME_FAROOQ");

// Then printer respond to the users command and print the docs

console.log("After Adding...", useQeue.peek());

console.log("After Adding...", useQeue.peek());

console.log("After Adding...", useQeue.size()); // 2

console.log("After Adding...", useQeue.isEmpty()); // false

// User 1 Printing...
console.log("User 1 CV is Printing...", useQeue.deqeue());
// User 2 Printing...
console.log("User 2 Resume is Printing...", useQeue.deqeue());

// You see that that user comes first goes first

console.log("After Removing...", useQeue.size()); // 2

console.log("After Removing...", useQeue.size()); // true

console.log(useQeue.isEmpty()); // true
