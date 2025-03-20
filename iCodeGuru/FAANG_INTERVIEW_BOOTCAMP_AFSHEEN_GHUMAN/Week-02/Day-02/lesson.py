# class Solution:
    # def maxNum(nums):
    #     maxNumber = nums[0]
    #     for num in nums:
    #         if num > maxNumber:
    #             maxNumber = num
    #     return maxNumber
    # def minNum(nums):
    #     minNumber = nums[0]
    #     for num in nums:
    #         if num < minNumber:
    #             minNumber = num
    #     return minNumber
    

# print(Solution.minNum([1, 2, 3, 78, 85]))


# 485. Max Consecutive Ones

class Solution:
    def findMaxConsecutiveOnes(nums):
        count = 0
        maxCount =0 
        for num in nums:
            if num == 1:
                count += 1
            else:
                count = 0
            maxCount = max(maxCount, count)
        return maxCount

print(Solution.findMaxConsecutiveOnes([1, 1, 0, 1, 0, 0, 1, 1, 1, 1])) # 4

# 189. Rotate Array

class Solution1:
    def rotate(nums, k):
        lengthOfNums = len(nums)
        k = k % lengthOfNums
        nums.reverse()
        nums[:k] = reversed(nums[:k])
        nums[k:] = reversed(nums[k:])
        return nums

print(Solution1.rotate([1,2,3,4,5,6,7], 3)) # [ 5, 6, 7, 1, 2, 3, 4]

