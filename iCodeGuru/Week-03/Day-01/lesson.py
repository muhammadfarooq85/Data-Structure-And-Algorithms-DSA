# stack data struture
# it follows last in first out

# key operations:-
# pop
# push
# isEmpty
# peek
# size
class Stack:
    def __init__(self):
        # Initialize an empty list to store the stack elements
        self.stack = []

    def is_empty(self):
        # Check if the stack is empty
        return len(self.stack) == 0

    def push(self, item):
        # Add an item to the top of the stack
        self.stack.append(item)

    def pop(self):
        # Remove and return the item from the top of the stack
        if self.is_empty():
            raise IndexError("pop from empty stack")
        return self.stack.pop()

    def peek(self):
        # Return the top item of the stack without removing it
        if self.is_empty():
            raise IndexError("peek from empty stack")
        return self.stack[-1]

    def size(self):
        # Return the number of elements in the stack
        return len(self.stack)

# Example usage
if __name__ == "__main__":
    my_stack = Stack()
    my_stack.push(10)
    my_stack.push(20)
    my_stack.push(30)

    print("Top item:", my_stack.peek())  # Should print 30
    print("Stack size:", my_stack.size())  # Should print 3

    print("Popped item:", my_stack.pop())  # Should print 30
    print("Stack size after pop:", my_stack.size())  # Should print 2
