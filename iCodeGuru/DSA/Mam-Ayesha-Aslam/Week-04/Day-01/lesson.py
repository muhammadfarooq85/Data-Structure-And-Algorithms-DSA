# we talked about Qeue. And solved some leetcode problems.


 # 2696. Minimum String Length After Removing Substrings
class Solutioin:
    def  minLength(s):
        stack = []
        for letter in range(0, len(s)):
            if stack and (stack[-1] == "A" and letter == "B") :
                stack.pop()
            elif (stack[-1] == "C" and letter == "D") :
                stack.pop()
            else:
                stack.push(letter)
    
        return len(stack)

print(Solutioin.minLength("ABFCACDB")) # 2