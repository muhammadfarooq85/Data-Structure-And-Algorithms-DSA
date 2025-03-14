# 2239. Find Closest Number to Zero

class Solution:
    def findClosestNumbertoZero(nums):
        closestNum = nums[0]
        for num in range(len(nums)):
            if  abs(num) < abs(closestNum) or (abs(num) == abs(closestNum) and num > closestNum):
                closestNum =  num
        return closestNum

print(Solution.findClosestNumbertoZero([2, -3, -1, 0, -1 ])) # 0

# implement stack using only qeues

# Fizz Buzz

# Merge Strings alternatively

# Remove duplicatesfrom sorted array

class Solution1:
    def removeDuplicates(nums):
        if not nums:
            return 0
        l = 0
        for r in range(0, len(nums)):
            if nums[l] != nums[r]:
                l += 1
            else:
                nums[l] = nums[r]
        return l + 1

print(Solution1.removeDuplicates([1, 1, 2])) # [ 1, 2 ]

# 704. Binary Search

class Solution2:
    def binarySearch(nums, target):
        leftPointer = 0
        rightPointer = len(nums) - 1
        while rightPointer >= leftPointer:
            mid = rightPointer + leftPointer // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                leftPointer = mid + 1
            elif nums[mid] < target:
                rightPointer = mid - 1
        return -1

print(Solution2.binarySearch([-1, 2, 9, 5, 8, 7], 8))