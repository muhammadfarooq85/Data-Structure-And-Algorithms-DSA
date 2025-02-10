# qeue data structure

# qeue is a linear data structure that follows first in first out.
# means a element first comes go first
# for example people are buyig ticket from a ticket house or people are standing out an bank to retrieve tickets.

# key operations
# push
# peek
# pop
# isFull
# isEmpty

class MyQueue:
    def __init__(self, max_size: int = float('inf')):
        self.stack1 = []  # This stack will be used to push elements
        self.stack2 = []  # This stack will be used to pop elements
        self.max_size = max_size

    # Push element to the back of the queue
    def push(self, x: int):
        if len(self.stack1) + len(self.stack2) >= self.max_size:
            print("Queue is full. Cannot push.")
            return
        self.stack1.append(x)

    # Pop element from the front of the queue
    def pop(self):
        if self.isEmpty():
            print("Queue is empty. Cannot pop.")
            return None
        
        # If stack2 is empty, move all elements from stack1 to stack2
        if not self.stack2:
            while self.stack1:
                self.stack2.append(self.stack1.pop())
        
        return self.stack2.pop()

    # Peek the front element of the queue
    def peek(self):
        if self.isEmpty():
            print("Queue is empty. Cannot peek.")
            return None
        
        # If stack2 is empty, move all elements from stack1 to stack2
        if not self.stack2:
            while self.stack1:
                self.stack2.append(self.stack1.pop())
        
        return self.stack2[-1]

    # Check if the queue is empty
    def isEmpty(self):
        return len(self.stack1) == 0 and len(self.stack2) == 0

    # Check if the queue is full
    def isFull(self):
        return len(self.stack1) + len(self.stack2) == self.max_size


# Example usage:
queue = MyQueue(max_size=3)

queue.push(1)  # Queue: [1]
queue.push(2)  # Queue: [1, 2]
queue.push(3)  # Queue: [1, 2, 3]
queue.push(4)  # Output: Queue is full. Cannot push.

print(queue.peek())  # Output: 1 (Front of the queue)
print(queue.pop())   # Output: 1 (Queue: [2, 3])

queue.push(4)  # Queue: [2, 3, 4]

print(queue.isEmpty())  # Output: False
print(queue.isFull())   # Output: True
