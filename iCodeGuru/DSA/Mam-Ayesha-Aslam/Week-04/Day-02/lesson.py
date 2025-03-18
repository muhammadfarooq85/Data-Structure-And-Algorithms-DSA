# 20. Valid Parenthesis

class Solution:
    def isValid(s):
        stack = []
        for i in s:
            if i == "(" or i == "{" or i == "[":
                stack.append(i)
            else:
                if not stack:  
                    return False
                top = stack[-1]
                if (i == ")" and top == "(") or (i == "}" and top == "{") or (i == "]" and top == "["):
                    stack.pop()
                else:
                    return False

        return len(stack) == 0

print(Solution.isValid(")[]{}"))  # False
print(Solution.isValid("{}"))  # True
