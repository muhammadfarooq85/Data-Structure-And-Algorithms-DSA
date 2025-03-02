# leetcode Problem...

class Solution:
    def concatenateArray(nums):
        ans = []
        for i in range(0, len(nums)):
            ans.append(nums[i])
        return ans + nums
    
print(Solution.concatenateArray([1,2,3,5]))

# 1295. Find Numbers with Even Number of Digits

class Solution1:
    def findNumbers(nums):
        count = 0
        for num in nums:
            strNum = str(num)
            if len(strNum) % 2 == 0:
                count += 1
                
        return count
    
print(Solution1.findNumbers([12,345,2,6,7896])) # 2