# Concatenating nums

class Solution:
    def concatenate(n):
        ans = []
        for i in range(2):
                for j in n:
                    ans.append(j)
        return ans

# nums = [1,2,1]
nums = [1,2,3]
print(Solution.concatenate(nums))