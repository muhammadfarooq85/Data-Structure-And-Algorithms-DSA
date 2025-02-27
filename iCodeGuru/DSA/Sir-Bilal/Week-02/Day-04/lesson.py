# Leetcode problem

# 387. First Unique Character in a String

# solution
class Solution:
    @staticmethod
    def findFirstNonRepeatingChar(s):
        uniqueChars = {}
        for char in s:
            if char in uniqueChars:
                uniqueChars[char] += 1
            else:
                uniqueChars[char] = 1
        for i, char in enumerate(s):
            if uniqueChars[char] == 1:
                return i
        return -1 

print(Solution.findFirstNonRepeatingChar("aabb"))
print(Solution.findFirstNonRepeatingChar("loveleetcode"))
