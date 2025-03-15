# 1672. Richest Customer Wealth

class Solution:
    def maxWealth(accounts):
        maxWealth = 0
        for i in accounts:
            maxWealth = max(maxWealth, sum(i))
        return maxWealth

print(Solution.maxWealth([[1,2,3], [2,31]])) # 33

# 876. Middle of linked list

# class Solution1:
#     def middleLinkedList(linkedList):
#         p = head
#         lengthOfNode = 0
#         while p != None:
#             lengthOfNode += 1
#             p = p.next
#         middleNode = lengthOfNode // 2
#         p = head
#         for i in range(middleNode):
#             p = p.next
#         return p
#         fast = head
#         slow = head
#         while fast and fast.next:
#             slow = slow.next
#             fast = fast.next.next
#         return slow

# print(Solution1.middleLinkedList([1, 2, 3, 4, 5])) # 3

# 46. Permutations