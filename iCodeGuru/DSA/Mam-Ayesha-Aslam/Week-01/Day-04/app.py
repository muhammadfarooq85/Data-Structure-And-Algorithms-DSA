# 136. Find Single Number

class Solution:
    def findUniqueNumber(nums:list[int]):
        if len(nums) == 1:
            return nums[0]        
        setNums =set(nums)
        for setNum in setNums:
            if nums.count(setNum) == 1:
                return setNum

print(Solution.findUniqueNumber([2, 2, 1])) # 1
print(Solution.findUniqueNumber([1])) # 1 