# 1313. Decompress Run-Length Encoded List

class Solution:
    def decompressRLElist(nums):
        result = []
        for i in range(0, len(nums), 2):
            result.extend([nums[i + 1]] * nums[i])
        return result

print(Solution.decompressRLElist([1,2, 3, 4])) # [2, 4 ,4, 4 ]


# 1431. Kids With the Greatest Number of Candies

class Solution1:
    def kidsWithCandies(candies, extraCandies):
        result = []
        maxCandy = max(candies)
        for i in range(0,len(candies)):
            if candies[i] + extraCandies >= maxCandy:
                result.append(True)
            else:
                result.append(False)
        return result
print(Solution1.kidsWithCandies([2,3,5,1,3], 3))

# 58. Length of last word

# 326. Power of Three

class Solution2:
    def isPowerOfThree(n):
        while(n > 0):
            if n % 3 == 2:
                return False
            n //= 3

print(Solution2.isPowerOfThree(24)) # False