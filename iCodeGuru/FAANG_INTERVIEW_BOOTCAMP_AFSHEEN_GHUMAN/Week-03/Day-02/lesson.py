# 20. Valid Parenthesis

class Solution:
    def isValidPaenthesis(s):
        stack = []
        dic = {")":"(", "}":"{", "]":"["} # key is closing and value is opening
        for parenthes in s:
            if parenthes in dic.values(): # checking if opening bracket then append
                stack.append(parenthes)
            elif parenthes in dic: # checking if closign bracket then simply check if it is matchig to its corresponding bracket or not. If match then pop otherwise if stack empty or doesn't match then simply return False
                if stack and stack[-1] == dic[parenthes]:
                    stack.pop()
                else:
                    return False

        return not stack # if stack is empty its means the string is valid then return true otherwise return false

print(Solution.isValidPaenthesis("()")) # True
print(Solution.isValidPaenthesis("[]")) # False
print(Solution.isValidPaenthesis("[]]}")) # False

class Solution1:
    @staticmethod
    def findTopFrequentElement(nums, k):
        freqMap = {}
        for num in nums:  # Iterate through the elements of nums
            if num in freqMap:
                freqMap[num] += 1
            else:
                freqMap[num] = 1

        # Sort by frequency in descending order
        sortedNums = sorted(freqMap.items(), key=lambda x: x[1], reverse=True)

        # Take the top k frequent elements
        result = [sortedNum[0] for sortedNum in sortedNums[:k]]
        return result

print(Solution1.findTopFrequentElement([1, 1, 1, 2, 2, 3], 2))  # [1, 2]
