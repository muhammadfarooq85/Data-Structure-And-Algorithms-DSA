# leetcode Problem...

class Solution:
    def concatenateArray(nums):
        ans = []
        for i in range(0, len(nums)):
            ans.append(nums[i])
        return ans + nums
    
print(Solution.concatenateArray([1,2,3,5]))