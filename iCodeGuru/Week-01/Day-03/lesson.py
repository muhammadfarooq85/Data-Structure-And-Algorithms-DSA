# Time Complexity
# We are not taking about the time based on system. We are taking time taken as a functionn as input size

# Space Complexity
# We are not taking about the system space. We are taking about the space used by algorithms.

# LeetCode Problem #136
# Single Number...

class Solution:
    def singleNumber(n):
        if len(n) == 1:
            return n[0]
        for i in nums:
            if nums.count(i) == 1:
                return i
            
nums = [2,4,4,2,3]
print(Solution.singleNumber(nums))