# revised the last leetcode problem to understand better

# 844. Backspace String Compare

class Solution:
    def backspaceCompare(s, t):
        stack1 = []
        stack2 = []
        for str1 in s:
            if (str1 and str1 == "#"):
                stack1.pop()
            else:
                stack1.append(str1)
        for str2 in t:
                if (str2 and str2 == "#"):
                    stack2.pop()
                else:
                    stack2.append(str2)
        return stack1 == stack2


print(Solution.backspaceCompare("ab#c", "ab#c")) # true