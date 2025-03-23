# 283. Move Zeroes

class Solution:
    def moveZeros(nums):
        left = 0
        for right in range(0, len(nums)):
            if nums[right] != 0:
                nums[left], nums[right] = nums[right], nums[left]
                left = left + 1
        return nums

print(Solution.moveZeros([1, 0, 3, 12, 0])) # [ 1, 3, 12, 0]

# 283. Shuffle String

class Solution1:
    def shuffleString(s,indices):
        result = [""] * len(s)
        for i in range(0, len(indices)):
            result[indices[i]] = s[i]
        return "".join(result)

print(Solution1.shuffleString("codeleet", [4, 5, 6, 7, 0, 1, 2, 3])) # leetcode