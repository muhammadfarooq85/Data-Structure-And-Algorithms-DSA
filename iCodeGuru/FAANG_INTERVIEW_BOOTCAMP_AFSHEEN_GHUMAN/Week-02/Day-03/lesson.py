# 268. Missing Number

class solution:
    def findMisingNumber(nums):
        dic = {}
        for num in range(0, len(nums) +1):
            dic[num] = 1
        for numInDic in dic:
            if numInDic not in nums:
                return numInDic

print(solution.findMisingNumber([0, 1])) # 2