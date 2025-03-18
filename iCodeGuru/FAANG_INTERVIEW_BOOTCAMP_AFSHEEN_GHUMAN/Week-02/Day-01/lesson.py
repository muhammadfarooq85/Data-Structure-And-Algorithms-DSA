# 551. Student Attendance Record I

class Solution:
    def checkRecord(s):
        absents = 0
        lates = 0
        for i in range(0, len(s)):
            if s[i] == "A":
                absents += 1
            if s[i: i + 3] == "LLL":
                lates += 3
                
        return absents < 2 and lates < 3


print(Solution.checkRecord("PPALLP")) # True
print(Solution.checkRecord("PPALLL")) # False
        
# 162. Find Peak Element

class Solution1:
    def peakElement(nums):
        for num in range(0, len(nums)):
            left = 0
            right = len(nums) - 1
            while left < right:
                mid = (left + right) // 2
                if (nums[mid] > nums[mid + 1]):
                    right = mid
                else:
                    left = mid + 1
        return left

print(Solution1.peakElement([1, 2, 3, 1])) # 2

# 344. Reverse String

class Solution2:
    def reverseString(s):
        left = 0
        right = len(s) - 1
        while left < right:
            s[left], s[right] = s[right], s[left]
            left =  left + 1
            right = right -  1
        return s

print(Solution2.reverseString(["h","e","l","l","o"])) # ["o","l","l","e","h"]

# 49. Group Anagrams
