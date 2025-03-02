# 268. Missing Number

class Solution:
    def findMissingNumber (nums):
        n = len(nums)
        total = ((n * (n + 1)) / 2)
        for num in nums:
            total -= n
        return total
print(Solution.findMissingNumber([ 0, 1 ]))  # 2