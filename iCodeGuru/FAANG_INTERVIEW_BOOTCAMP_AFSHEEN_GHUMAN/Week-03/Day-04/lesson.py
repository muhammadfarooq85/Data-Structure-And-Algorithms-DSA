# 76. Minimum Windows Substring

# I tried to solve the problem but don't complelety understand.

# 206. Reverse Linked List

class Solution:
    def reverseList(head):
        if not head:
            return None
        if not head.next:
            return None
        
        nextNode = self.reverseList(head.next)

print (Solution.reverseList([1,2,3,4,5,6])) # [6, 5, 4, 3, 2 ,1]


